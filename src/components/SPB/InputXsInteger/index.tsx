import { useState, useEffect, useRef } from 'react';
import { useFormContext } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

import { Container, InputContainer, Input, ErrorMsg } from './styles';
import { LabelAndOccurs } from '../LableAndOccurs';

interface InputXsIntegerProps {
  choice?: boolean;
  name: string;
  type?: string;
  base?: string;
  NomeCampo: string;
  DescricaoCampo?: string;
  DescricaoTipo?: string;
  totalDigits: number;
  xmlStack: string;
  tagRef?: string;
  fixed?: string;
  minOccurs?: number;
  maxOccurs?: string | number;
}

export function InputXsInteger(props: InputXsIntegerProps) {
  const xmlStackLocal = props.xmlStack;
  const [isChoice, SetIsChoice] = useState(true);
  const [isReadyOnly] = useState<boolean>(typeof props.fixed !== 'undefined');

  const {
    unregister,
    register,
    formState: { errors },
  } = useFormContext();

  // const inputRef = useRef<HTMLInputElement | null>(null);

  // const { ref, ...rest } = register(xmlStackLocal, {
  //   shouldUnregister: !isChoice,
  //   value: props.fixed ? props.fixed : '',
  //   required: `${props.NomeCampo} é obrigatório`,
  //   maxLength: {
  //     value: props.totalDigits ? props.totalDigits : 1,
  //     message: `${props.NomeCampo} tamanho maximo de ${props.totalDigits} caracteres`,
  //   },
  // });

  //   useEffect(() => {
  //     const firstError = Object.keys(errors) as Array<keyof typeof errors>
  //   ).reduce<keyof typeof errors | null>((field, a) => {
  //       const fieldKey = field as keyof typeof errors;
  //       return !!errors[fieldKey] ? fieldKey : a;
  //   }, null);

  //   if (firstError) {
  //     setFocus(firstError)
  //   }
  // }, [errors, setFocus]);

  useEffect(() => {
    let choice = true;
    if (props.choice === undefined) {
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
                width={props.totalDigits && props.totalDigits}
                aria-live="polite"
                {...register(xmlStackLocal, {
                  shouldUnregister: !isChoice,
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
