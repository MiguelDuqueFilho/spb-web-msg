import { useState, useEffect } from 'react';

import { Container, InputContainer, ErrorMsg } from '../styles/stylesInputSPB';
import { Input } from './styles';

import { LabelAndOccurs } from '../LableAndOccurs';
import { ConnectForm } from '../../../contexts/ConnectForm';
import { ErrorMessage } from '@hookform/error-message';
import { RegisterOptions, useFormContext } from 'react-hook-form';

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
  const { unregister } = useFormContext();
  const [isChoice, SetIsChoice] = useState(true);
  const [isReadyOnly] = useState<boolean>(typeof props.fixed !== 'undefined');

  const validationAndError = (props: InputXsStringProps): RegisterOptions => {
    const validate1 = { shouldUnregister: !isChoice };

    const validate2 = props.fixed ? { value: props.fixed } : {};

    const validate3 = {
      required: {
        value: true,
        message: `${props.NomeCampo} é obrigatório`,
      },
    };

    const validate4 = props.maxLength
      ? {
          minLength: {
            value: props.minLength ? props.minLength : 0,
            message: `${props.NomeCampo} tamanho mínimo de ${props.minLength} caracteres`,
          },
        }
      : {};
    const validate5 = props.maxLength
      ? {
          maxLength: {
            value: props.maxLength ? props.maxLength : 1,
            message: `${props.NomeCampo} tamanho maximo de ${props.maxLength} caracteres`,
          },
        }
      : {};

    const validate6 = props.pattern
      ? {
          pattern: {
            value: RegExp(props.pattern),
            message: `${props.NomeCampo} deve respeitar o formato ${props.pattern}.`,
          },
        }
      : {};

    const result: RegisterOptions = {
      ...validate1,
      ...validate2,
      ...validate3,
      ...validate4,
      ...validate5,
      ...validate6,
    };

    return result;
  };

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
    <Container choice={!!isChoice}>
      {isChoice && (
        <>
          <LabelAndOccurs
            name={props.name}
            type={props.type}
            NomeCampo={props.NomeCampo}
            DescricaoCampo={props.DescricaoCampo}
            DescricaoTipo={props.DescricaoTipo}
            minOccurs={props.minOccurs}
            maxOccurs={props.maxOccurs}
          >
            <ConnectForm>
              {({ register, formState: { errors } }) => (
                <InputContainer>
                  <Input
                    type="text"
                    readOnly={isReadyOnly}
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
        </>
      )}
    </Container>
  );
}
