import { createContext, ReactNode, useState } from 'react';
import { api } from '../../services/axios';
import { CreateMessageComponent } from './MessageTransform';
import { toast } from 'react-toastify';

interface MessagesProviderProps {
  children: ReactNode;
}

export interface IMessage {
  codMsg: string;
  xmlns: string;
  schema: object;
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
  CodEvento: string;
  NomeEvento: string;
  Fluxo: string;
  Mensagens?: IMensagem[];
  createdAt: string;
  updateAt: string;
}

export interface IGrupoServico {
  GrpServico: string;
  Descricao: string;
  Dominio: string;
  Eventos?: IEvento[];
  createdAt?: string;
  updateAt?: string;
  _count?: {
    Eventos: number;
  };
}

interface MessagesContextProps {
  message: IMessage | null;
  messageComponent: IMessageCompoment | null;
  grupoServico: IGrupoServico[] | null;
  getServico: (codMsg?: string) => Promise<void>;
  getMessage: (codMsg: string) => void;
  transformToXML: (obj: object) => Promise<string>;
  validateXML: (codMsg: string, msgXml: string) => Promise<object>;
}

const headerXml = `<?xml version="1.0" encoding="UTF-8"?>`;

export const MessagesContext = createContext({} as MessagesContextProps);

export function MessagesProvider({ children }: MessagesProviderProps) {
  const [message, setMessage] = useState<IMessage | null>(null);

  const [messageComponent, setMessageComponent] =
    useState<IMessageCompoment | null>(null);

  const [grupoServico, setGrupoServico] = useState<IGrupoServico[] | null>(
    null
  );

  async function transformMessageToComponent(codMsg: string, obj: object) {
    let components: ReactNode = null;
    components = await CreateMessageComponent(obj);

    const result = { codMsg, msgComponent: components };
    setMessageComponent(result);

    return result;
  }

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

  async function getServico(msg: string | null) {
    try {
      const response = await api.get(`catalog/service/list`);
      setGrupoServico(response.data);
    } catch (error) {
      toast.error(`Error: ${error}`);
    }
  }

  async function getMessage(msg: string) {
    try {
      const response = await api.get(`/convert-xsd/${msg}`);
      const { codMsg, xmlns, schema } = response.data as IMessage;

      const msgReceived = { codMsg, xmlns, schema };
      setMessage(msgReceived);

      const msgComponent = await transformMessageToComponent(codMsg, schema);
      setMessageComponent(msgComponent);
    } catch (error) {
      toast.error(`Error: ${error}`);
    }
  }

  async function validateXML(codMsg: string, msgXml: string) {
    try {
      const response = await api.post(`/validate-xml/${codMsg}`, msgXml, {
        headers: { 'Content-Type': 'application/xml' },
      });

      return response.data;
    } catch (error) {
      toast.error(`Error: ${error}`);
      return { error };
    }
  }

  return (
    <MessagesContext.Provider
      value={{
        message,
        messageComponent,
        grupoServico,
        getServico,
        getMessage,
        transformToXML,
        validateXML,
      }}
    >
      {children}
    </MessagesContext.Provider>
  );
}
