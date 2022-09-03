import { ReactNode } from 'react';
import { InputXsString } from '../InputXsString';
import { USERMSGContainer } from './styles';

interface USERMSGProps {
  name?: string;
  NomeCampo?: string;
  DescricaoCampo?: string;
  values?: string;
  currentValue?: string;
  required?: boolean;
  changeHandler?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function USERMSG(props: USERMSGProps) {
  return (
    <USERMSGContainer>
      <InputXsString {...props} />
    </USERMSGContainer>
  );
}
