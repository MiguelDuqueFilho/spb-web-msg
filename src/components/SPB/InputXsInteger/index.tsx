import { ErrorMessage } from '@hookform/error-message';
import { useEffect, useState } from 'react';
import { ConnectForm } from '../../../contexts/ConnectForm';
import { LabelAndOccurs } from '../LableAndOccurs';

import { Container, InputContainer, ErrorMsg } from '../styles/stylesInputSPB';
import { Input } from './styles';

import { RegisterOptions, useFormContext } from 'react-hook-form';

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
  const { unregister } = useFormContext();
  const [isChoice, SetIsChoice] = useState(true);
  const [isReadyOnly] = useState<boolean>(typeof props.fixed !== 'undefined');

  const validationAndError = (props: InputXsIntegerProps): RegisterOptions => {
    const validate1 = { shouldUnregister: !isChoice };

    const validate2 = props.fixed ? { value: props.fixed } : {};

    const validate3 = {
      required: {
        value: true,
        message: `${props.NomeCampo} é obrigatório`,
      },
    };

    const validate4 = props.totalDigits
      ? {
          maxLength: {
            value: props.totalDigits,
            message: `${props.NomeCampo} tamanho maximo de ${props.totalDigits} caracteres`,
          },
        }
      : {};

    const result: RegisterOptions = {
      ...validate1,
      ...validate2,
      ...validate3,
      ...validate4,
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
    <Container choice={isChoice}>
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
                    maxLenght={props.totalDigits}
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
