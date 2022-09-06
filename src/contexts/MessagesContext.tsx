import { createContext, ReactNode, useState } from 'react';
import { api } from '../services/axios';
import { CreateMessageComponent } from '../components/MessageTransform';

interface MessagesContextProps {
  message: object;
  messageComponent: ReactNode;
  getMessage: (msg: string) => object;
}

export const MessagesContext = createContext({} as MessagesContextProps);

interface MessagesProviderProps {
  children: ReactNode;
}

export function MessagesProvider({ children }: MessagesProviderProps) {
  const [message, setMessage] = useState({});
  const [messageComponent, setMessageComponent] = useState<ReactNode>(null);

  async function transformMessageToComponent(obj: object) {
    let components: ReactNode = null;
    components = await CreateMessageComponent(obj);
    setMessageComponent(components);
    return components;
  }

  async function getMessage(msg: string) {
    const response = await api.get(`/transformxsl/${msg}`);
    setMessage(response.data);
    await transformMessageToComponent(response.data);
  }

  return (
    <MessagesContext.Provider
      value={{
        message,
        messageComponent,
        getMessage,
      }}
    >
      {children}
    </MessagesContext.Provider>
  );
}
