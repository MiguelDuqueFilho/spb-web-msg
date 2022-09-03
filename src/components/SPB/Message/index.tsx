import { ReactNode } from 'react';
import { MessageContainer } from './styles';

interface MessageProps {
  children?: ReactNode;
}

export function Message(props: MessageProps) {
  return (
    <MessageContainer>
      <span>Message</span>
      {props.children}
    </MessageContainer>
  );
}
