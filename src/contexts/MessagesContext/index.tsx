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
  Dominio: string;
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
  grupoServico: IGrupoServico[] | null;
  events: IEvento[] | null;
  grupoServicoConv: IGrupoServico[] | null;
  getServico: () => Promise<void>;
  getServicoConv: () => Promise<void>;
  listEventByService: (service: string) => Promise<void>;
  updateSchema: (service: string) => Promise<void>;
  getMessage: (codMsg: string) => Promise<void>;
  transformToXML: (obj: object) => Promise<string>;
  validateXML: (codMsg: string, msgXml: object) => Promise<object>;
  sendXML: (codMsg: string, msgXml: object) => Promise<object>;
}

const headerXml = `<?xml version="1.0" encoding="UTF-8"?>`;

export const MessagesContext = createContext({} as MessagesContextProps);

export function MessagesProvider({ children }: MessagesProviderProps) {
  const [message, setMessage] = useState<IEventJson | null>(null);

  const [messageComponent, setMessageComponent] =
    useState<IMessageCompoment | null>(null);

  const [grupoServico, setGrupoServico] = useState<IGrupoServico[] | null>(
    null
  );
  const [grupoServicoConv, setGrupoServicoConv] = useState<
    IGrupoServico[] | null
  >(null);

  const [events, setEvents] = useState<IEvento[] | null>(null);

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

  async function getServico(): Promise<void> {
    try {
      const response = await api.get(`catalog/service/list`);
      setGrupoServico(response.data);
    } catch (error) {
      toast.error(`Error: ${error}`);
    }
  }

  async function getServicoConv(): Promise<void> {
    try {
      const response = await api.get(`catalog/service/listconv`);
      setGrupoServicoConv(response.data);
    } catch (error) {
      toast.error(`Error: ${error}`);
    }
  }

  async function listEventByService(service: string): Promise<void> {
    try {
      const response = await api.get(`catalog/event/listByService/${service}`);
      setEvents(response.data);
    } catch (error) {
      toast.error(`Error: ${error}`);
    }
  }

  async function updateSchema(service: string) {
    try {
      const response = await api.get(`catalog/schema/updateAll/${service}`);
      const { error } = response.data;
      if (error) {
        toast.error(`Error: ${error}`);
      } else {
        setGrupoServico(response.data);
      }
    } catch (error: any) {
      toast.error(`Error: ${error.message}`);
    }
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
      const response = await api.post(`/message/send/${codMsg}`, xmlData, {
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
        events,
        grupoServicoConv,
        getServico,
        getServicoConv,
        listEventByService,
        updateSchema,
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
