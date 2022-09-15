import { ReactNode, useEffect } from 'react';

import { MessageContainer, Span } from './styles';
import { useFormContext } from 'react-hook-form';

export interface MessageProps {
  children?: ReactNode;
  choice?: boolean;
  name: string;
  type?: string;
  tagRef?: string;
  childRef?: string;
  xmlStack: string;
  Mensagem?: string;
  Emissor?: string;
  Destinatario?: string;
}

export function Message(props: MessageProps) {
  const xmlStackLocal = props.xmlStack;
  const { unregister } = useFormContext();

  useEffect(() => {
    if (props.choice !== undefined) {
      if (!props.choice) {
        unregister(xmlStackLocal);
      }
    }
  }, [props.choice, unregister, xmlStackLocal]);

  return (
    <MessageContainer choice={!!props.choice}>
      {props.choice && (
        <>
          <Span>{`${props.name} - ${props.Mensagem}`}</Span>
          {props.children}
        </>
      )}
    </MessageContainer>
  );
}
