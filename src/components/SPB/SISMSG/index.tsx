import { ReactNode } from 'react';
import { SISMSGContainer } from './styles';

interface SISMSGProps {
  children?: ReactNode;
}

export function SISMSG(props: SISMSGProps) {
  return (
    <SISMSGContainer>
      <span>SISMSG</span>
      {props.children}
    </SISMSGContainer>
  );
}
