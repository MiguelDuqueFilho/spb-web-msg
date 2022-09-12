import { ReactNode } from 'react';
import { BCMSGContainer } from './styles';

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
      <span>BCMSG</span>
      {props.children}
    </BCMSGContainer>
  );
}
