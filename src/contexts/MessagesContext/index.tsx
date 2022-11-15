import { createContext, ReactNode, useState } from 'react';
import { api } from '../../services/axios';
import { CreateMessageComponent } from './MessageTransform';
import { toast } from 'react-toastify';

interface MessagesProviderProps {
  children: ReactNode;
}

interface IEventJson {
  codEvento: string;
  xmlns: string;
  schema: object;
  error?: string;
}

export interface IMessage {
  codEvento: string;
  IsConvert: boolean;
  EventJson: IEventJson;
}

export interface IMessageCompoment {
  codMsg: string;
  msgComponent: ReactNode;
}

export interface IMensagem {
  CodMsg: string;
  Tag: string;
  Descricao: string;
  EntidadeOrigem: string;
  EntidadeDestino: string;
  createdAt: string;
  updateAt: string;
}

export interface IEvento {
  message: any;
  CodEvento: string;
  NomeEvento: string;
  Fluxo: string;
  IsConvert?: boolean;
  Mensagens?: IMensagem[];
  createdAt: string;
  updateAt: string;
}

export interface IGrupoServico {
  GrpServico: string;
  Descricao: string;
  Fluxo: string;
  Eventos?: IEvento[];
  createdAt?: string;
  updateAt?: string;
  _count?: {
    Eventos: number;
  };
}

interface MessagesContextProps {
  message: IEventJson | null;
  messageComponent: IMessageCompoment | null;
  getMessage: (codMsg: string) => Promise<void>;
  transformToXML: (obj: object) => Promise<string>;
  validateXML: (codMsg: string, msgXml: object) => Promise<object>;
  sendXML: (codMsg: string, msgXml: object) => Promise<boolean>;
}

const headerXml = `<?xml version="1.0" encoding="UTF-8"?>`;

export const MessagesContext = createContext({} as MessagesContextProps);

export function MessagesProvider({ children }: MessagesProviderProps) {
  const [message, setMessage] = useState<IEventJson | null>(null);

  const [messageComponent, setMessageComponent] =
    useState<IMessageCompoment | null>(null);

  /**
   * Transform Object to XML
   * @param obj
   * @returns
   */
  async function transformToXML(obj: object): Promise<string> {
    let xml = headerXml;
    xml = await OBJtoXML(obj);
    return xml;
  }

  /**
   * Object to XML
   * @param obj
   * @returns
   */
  async function OBJtoXML(obj: any) {
    let xml: string = '';
    for (const prop in obj) {
      if (prop === 'DOC') {
        xml += `<${prop} xmlns="${message?.xmlns}">`;
      } else {
        xml += `<${prop}>`;
      }

      if (obj[prop] instanceof Array) {
        for (const array in obj[prop]) {
          xml += await OBJtoXML(obj[prop][array]);
        }
      } else if (typeof obj[prop] === 'object') {
        xml += await OBJtoXML(obj[prop]);
      } else {
        xml += obj[prop];
      }
      xml += `</${prop}>`;
    }
    xml = xml.replace(/<\/?[0-9]{1,}>/g, '');
    return xml;
  }

  async function transformMessageToComponent(codMsg: string, obj: object) {
    let components: ReactNode = null;

    components = await CreateMessageComponent(obj);

    const result = { codMsg, msgComponent: components };
    setMessageComponent(result);
  }

  async function getMessage(codMsg: string) {
    try {
      const response = await api.get(`/message/${codMsg}`);
      const { IsConvert, EventJson } = response.data as IMessage;

      setMessage(EventJson);

      if (IsConvert === false) {
        toast.error(
          `Mensagem Não convertida com sucesso - verificar conversão na configuração `
        );
        return;
      }

      if (typeof EventJson === 'undefined') {
        toast.error(
          `Error na geração da mensagem - verificar conversão na configuração.`
        );
        return;
      }

      await transformMessageToComponent(codMsg, { schema: EventJson.schema });
    } catch (error) {
      toast.error(`Error: ${error}`);
    }
  }

  async function validateXML(codMsg: string, msgXml: object) {
    try {
      const xmlData = await transformToXML(msgXml);
      const response = await api.post(`/message/validate/${codMsg}`, xmlData, {
        headers: { 'Content-Type': 'application/xml' },
      });

      return response.data;
    } catch (error) {
      toast.error(`Error: ${error}`);
      return { error };
    }
  }

  async function sendXML(codMsg: string, msgXml: object) {
    try {
      const xmlData = await transformToXML(msgXml);
      await api.post(`/message/send/${codMsg}`, xmlData, {
        headers: { 'Content-Type': 'application/xml' },
      });
      toast.info(`Mensagem ${codMsg} enviada com sucesso.`);
      return true;
    } catch (error) {
      toast.error(`Mensagem ${codMsg} Erro: ${error}`);
      return false;
    }
  }

  return (
    <MessagesContext.Provider
      value={{
        message,
        messageComponent,
        getMessage,
        transformToXML,
        validateXML,
        sendXML,
      }}
    >
      {children}
    </MessagesContext.Provider>
  );
}
