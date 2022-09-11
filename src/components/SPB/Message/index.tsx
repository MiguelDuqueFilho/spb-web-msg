import { ReactNode } from 'react';
import { MessageContainer, Span } from './styles';

export interface MessageProps {
  children?: ReactNode;
  choice?: boolean;
  name?: string;
  type?: string;
  tagRef?: string;
  childRef?: string;
  Mensagem?: string;
  Emissor?: string;
  Destinatario?: string;
}

export function Message(props: MessageProps) {
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
