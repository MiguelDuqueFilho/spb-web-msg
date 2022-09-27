import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { FieldLabel } from '../FieldLabel';
import { InputXsBase } from '../InputXsBase/index';

import {
  Container,
  InputContainer,
  Input,
  ErrorMsg,
  ContainerBase,
} from './styles';

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
  // const xmlStackLocal = props.xmlStack;

  // const {
  //   register,
  //   formState: { errors },
  // } = useFormContext();

  return (
    <ContainerBase>
      <InputXsBase {...props} NomeCampo="USERMSG" />
    </ContainerBase>

    // <ContainerBase>
    //   <Container>
    //     <FieldLabel {...props} NomeCampo={props.name} />
    //     <InputContainer>
    //       <Input
    //         type="text"
    //         width={props.maxLength && props.maxLength}
    //         {...register(xmlStackLocal, {
    //           shouldUnregister: true,
    //           required: `${props.description} é obrigatório`,

    //           maxLength: {
    //             value: props.maxLength ? props.maxLength : 1,
    //             message: `${props.description} tamanho maximo de ${props.maxLength} caracteres`,
    //           },
    //         })}
    //       />
    //       <ErrorMessage
    //         errors={errors}
    //         name={xmlStackLocal}
    //         render={({ message }) => message && <ErrorMsg>{message}</ErrorMsg>}
    //       />
    //     </InputContainer>
    //   </Container>
    // </ContainerBase>
  );
}
