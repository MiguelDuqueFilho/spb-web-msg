import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

import {
  Container,
  InputContainer,
  Input,
  ErrorMsg,
  ContainerBase,
} from './styles';
import { FieldLabel } from '../FieldLabel';

interface InputXsIntegerProps {
  choice?: boolean;
  name: string;
  type?: string;
  base?: string;
  NomeCampo: string;
  DescricaoCampo?: string;
  DescricaoTipo?: string;
  totalDigits?: number;
  xmlStack: string;
  tagRef?: string;
  fixed?: string;
  minOccurs?: number;
  maxOccurs?: string | number;

  sequence?: number;
  removeChild?: (sequence: number) => void;
}

export function InputXsInteger(props: InputXsIntegerProps) {
  const xmlStackLocal = props.xmlStack;

  const {
    register,
    formState: { errors },
  } = useFormContext();

  const [isReadyOnly] = useState<boolean>(typeof props.fixed !== 'undefined');

  return (
    <ContainerBase>
      <Container>
        <FieldLabel {...props} />
        <InputContainer>
          <Input
            type="text"
            readOnly={isReadyOnly}
            width={props.totalDigits && props.totalDigits}
            aria-live="polite"
            {...register(xmlStackLocal, {
              // shouldUnregister: !isChoice,
              value: props.fixed ? props.fixed : '',
              required: `${props.NomeCampo} é obrigatório`,
              maxLength: {
                value: props.totalDigits ? props.totalDigits : 1,
                message: `${props.NomeCampo} tamanho maximo de ${props.totalDigits} digitos`,
              },
              pattern: {
                value: props.totalDigits
                  ? RegExp(`[0-9]{${props.totalDigits}}$`)
                  : /[0-9]*$/,
                message: `${props.NomeCampo} deve ser numerico de ${props.totalDigits} digitos`,
              },
            })}
          />
          <ErrorMessage
            errors={errors}
            name={xmlStackLocal}
            render={({ message }) => message && <ErrorMsg>{message}</ErrorMsg>}
          />
        </InputContainer>
      </Container>
    </ContainerBase>
  );
}
