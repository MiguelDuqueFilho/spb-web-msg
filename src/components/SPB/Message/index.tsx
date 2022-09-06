import { ReactNode } from 'react';
import { MessageContainer } from './styles';

interface MessageProps {
  children: ReactNode;
  choice?: boolean;
  index: number;
}

export function Message(props: MessageProps) {
  return (
    <MessageContainer>
      <span>{`Message ${props.index}`}</span>
      {props.choice && props.children}
    </MessageContainer>
  );
}
