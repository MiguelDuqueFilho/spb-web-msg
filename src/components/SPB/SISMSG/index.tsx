import { ReactNode } from 'react';
import { SISMSGContainer, Span } from './styles';

interface SISMSGProps {
  children?: ReactNode;
  name?: string;
  type?: string;
  description?: string;
  tagRef?: string;
  childRef?: string;
  xmlStack: string;
}

export function SISMSG(props: SISMSGProps) {
  return (
    <SISMSGContainer>
      <Span>SISMSG</Span>
      {props.children}
    </SISMSGContainer>
  );
}
