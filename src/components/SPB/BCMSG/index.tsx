import { ReactNode } from 'react';
import { BCMSGContainer } from './styles';

interface BCMSGProps {
  children?: ReactNode;
}

export function BCMSG(props: BCMSGProps) {
  return (
    <BCMSGContainer>
      <span>BCMSG</span>
      {props.children}
    </BCMSGContainer>
  );
}
