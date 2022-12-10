import { InputXsBase } from '../InputXsBase/index';

import { ContainerBase } from './styles';

interface USERMSGProps {
  choice?: boolean;
  name: string;
  type: string;
  description?: string;
  childRef?: string;
  base?: string;
  tagRef?: string;
  xmlStack: any;
  minOccurs?: number;
  maxLength: number;

  sequence?: number;
  removeChild?: (sequence: number) => void;
}

export function USERMSG(props: USERMSGProps) {
  return (
    <ContainerBase>
      <InputXsBase {...props} NomeCampo="USERMSG" />
    </ContainerBase>
  );
}
