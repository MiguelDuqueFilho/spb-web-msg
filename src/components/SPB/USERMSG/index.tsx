import { Children, ReactNode } from 'react';
import { InputXsString } from '../InputXsString';
import { USERMSGContainer } from './styles';

interface USERMSGProps {
  name?: string;
  type?: string;
  minOccurs?: string;
  description?: string;
  maxLength: number;
  childRef?: string;
  base?: string;
  tagRef: string;
}

export function USERMSG(props: USERMSGProps) {
  return (
    <USERMSGContainer>
      <InputXsString
        name={props.name}
        type={props.type}
        NomeCampo={props.name}
        DescricaoCampo={props.description}
        maxLength={props.maxLength}
        required={!!props.minOccurs}
      />
    </USERMSGContainer>
  );
}
