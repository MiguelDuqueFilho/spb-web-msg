import { createContext, ReactNode, useState } from 'react';
import { api } from '../services/axios';
import { CreateMessageComponent } from '../components/MessageTransform';

interface MessagesContextProps {
  message: object;
  messageComponent: ReactNode;
  getMessage: (msg: string) => void;
  transformToXML: (msg: object) => Promise<string>;
  validateXML: () => Promise<object>;
}

export const MessagesContext = createContext({} as MessagesContextProps);

interface MessagesProviderProps {
  children: ReactNode;
}

export function MessagesProvider({ children }: MessagesProviderProps) {
  const [message, setMessage] = useState({});
  const [messageComponent, setMessageComponent] = useState<ReactNode>(null);
  const [codMsg, setCodMsg] = useState<string>('');
  const [messageXML, setMessageXML] = useState<string>('');
  const [xmlns, setXmlns] = useState<string>('');
  const [headerXml, setHeaderXml] = useState<string>(
    `<?xml version="1.0" encoding="UTF-8"?>`
  );

  async function transformMessageToComponent(obj: object) {
    let components: ReactNode = null;
    components = await CreateMessageComponent(obj);
    setMessageComponent(components);
    return components;
  }

  /**
   * Transform Object to XML
   * @param obj
   * @returns
   */
  async function transformToXML(obj: object): Promise<string> {
    let xml = headerXml;
    xml = await OBJtoXML(obj);
    setMessageXML(xml);
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
        xml += `<${prop} xmlns="${xmlns}">`;
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

  async function getMessage(msg: string) {
    const response = await api.get(`/transformxsl/${msg}`);
    setCodMsg(msg);
    setMessage(response.data);
    await transformMessageToComponent(response.data);
    const { schema } = response.data;
    if (schema) {
      setHeaderXml(`<?xml version="1.0" encoding="UTF-8"?>`);
      setXmlns(schema.xmlns);
    }
  }

  async function validateXML() {
    const response = await api.post(`/validatexml/${codMsg}`, messageXML, {
      headers: { 'Content-Type': 'application/xml' },
    });

    return response.data;
  }

  return (
    <MessagesContext.Provider
      value={{
        message,
        messageComponent,
        getMessage,
        transformToXML,
        validateXML,
      }}
    >
      {children}
    </MessagesContext.Provider>
  );
}
