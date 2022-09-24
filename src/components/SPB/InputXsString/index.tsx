import { useState, useEffect, memo } from 'react';
import { useFormContext } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

import { Container, InputContainer, Input, ErrorMsg } from './styles';
import { LabelAndOccurs } from '../LableAndOccurs';

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
}

export function InputXsString(props: InputXsStringProps) {
  const xmlStackLocal = props.xmlStack;
  const [isChoice, SetIsChoice] = useState(true);
  const {
    unregister,
    register,
    formState: { errors, isDirty },
  } = useFormContext();

  const [isReadyOnly] = useState<boolean>(typeof props.fixed !== 'undefined');

  useEffect(() => {
    let choice = true;
    if (typeof props.choice === 'undefined') {
      choice = true;
    } else {
      choice = !!props.choice;
      if (!props.choice) {
        unregister(xmlStackLocal);
      }
    }
    SetIsChoice(choice);
  }, [props.choice, unregister, xmlStackLocal]);

  return (
    <>
      {isChoice && (
        <Container>
          <LabelAndOccurs
            name={props.name}
            xmlStack={xmlStackLocal}
            type={props.type}
            NomeCampo={props.NomeCampo}
            DescricaoCampo={props.DescricaoCampo}
            DescricaoTipo={props.DescricaoTipo}
            minOccurs={props.minOccurs}
            maxOccurs={props.maxOccurs}
          >
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
                render={({ message }) =>
                  message && <ErrorMsg>{message}</ErrorMsg>
                }
              />
            </InputContainer>
          </LabelAndOccurs>
        </Container>
      )}
    </>
  );
}
