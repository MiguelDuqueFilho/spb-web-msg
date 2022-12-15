import { ReactNode } from 'react';
import { BCMSGContainer, Span } from './styles';

interface BCMSGProps {
  children?: ReactNode;
  name?: string;
  type?: string;
  description?: string;
  tagRef?: string;
  childRef?: string;
  xmlStack?: string;
}

export function BCMSG(props: BCMSGProps) {
  return (
    <BCMSGContainer>
      <Span>BCMSG</Span>
      {props.children}
    </BCMSGContainer>
  );
}
