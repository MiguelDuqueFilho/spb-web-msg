import { Container, Input, InputContainer, ErrorMsg } from './styles';

import { ErrorMessage } from '@hookform/error-message';
import { ConnectForm } from '../../../contexts/ConnectForm';
import { LabelAndOccurs } from '../LableAndOccurs';

import { RegisterOptions } from 'react-hook-form';

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
}

export function USERMSG(props: USERMSGProps) {
  const xmlStackLocal = props.xmlStack;

  const validationAndError = (props: USERMSGProps): RegisterOptions => {
    const validate1 = {
      required: {
        value: true,
        message: `${props.name} é obrigatório`,
      },
    };

    const validate2 = props.maxLength
      ? {
          maxLength: {
            value: props.maxLength ? props.maxLength : 1,
            message: `${props.name} tamanho maximo de ${props.maxLength} caracteres`,
          },
        }
      : {};

    const result: RegisterOptions = {
      ...validate1,
      ...validate2,
    };

    return result;
  };

  return (
    <Container>
      <LabelAndOccurs
        name={props.name}
        NomeCampo={props.name}
        DescricaoCampo={props.description}
        minOccurs={props.minOccurs}
      >
        <ConnectForm>
          {({ register, formState: { errors } }) => (
            <InputContainer>
              <Input
                type="text"
                maxLength={props.maxLength}
                {...register(xmlStackLocal, validationAndError(props))}
              />
              <ErrorMessage
                errors={errors}
                name={xmlStackLocal}
                render={({ message }) =>
                  message && <ErrorMsg>{message}</ErrorMsg>
                }
              />
            </InputContainer>
          )}
        </ConnectForm>
      </LabelAndOccurs>
    </Container>
  );
}
