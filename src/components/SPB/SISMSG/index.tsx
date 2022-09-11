import { ReactNode } from 'react';
import { SISMSGContainer } from './styles';

interface SISMSGProps {
  children?: ReactNode;
  name?: string;
  type?: string;
  description?: string;
  tagRef?: string;
  childRef?: string;
}

export function SISMSG(props: SISMSGProps) {
  return (
    <SISMSGContainer>
      <span>SISMSG</span>
      {props.children}
    </SISMSGContainer>
  );
}
