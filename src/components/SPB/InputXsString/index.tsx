import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { FieldLabel } from '../FieldLabel';

import {
  Container,
  InputContainer,
  Input,
  ErrorMsg,
  ContainerBase,
} from './styles';

interface InputXsStringProps {
  choice?: boolean;
  name: string;
  type?: string;
  base?: string;
  NomeCampo: string;
  DescricaoCampo?: string;
  DescricaoTipo?: string;
  xmlStack: string;
  tagRef?: string;
  fixed?: string;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  minOccurs?: number;
  maxOccurs?: string | number;

  sequence?: number;
  removeChild?: (sequence: number) => void;
}

export function InputXsString(props: InputXsStringProps) {
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
            width={props.maxLength && props.maxLength}
            {...register(xmlStackLocal, {
              shouldUnregister: true,
              value: props.fixed ? props.fixed : '',
              required: `${props.NomeCampo} é obrigatório`,
              minLength: {
                value: props.minLength ? props.minLength : 0,
                message: `${props.NomeCampo} tamanho mínimo de ${props.minLength} caracteres`,
              },
              maxLength: {
                value: props.maxLength
                  ? props.maxLength
                  : props.minLength
                  ? props.minLength
                  : 1,
                message: `${props.NomeCampo} tamanho maximo de ${props.maxLength} caracteres`,
              },
              pattern: {
                value: props.pattern ? RegExp(props.pattern) : /[\s\S]/,
                message: `${props.NomeCampo} deve respeitar o formato do campo.`,
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
