import { useState, useEffect } from 'react';

import {
  Input,
  Container,
  InputContainer,
  ErrorMsg,
} from '../styles/stylesInputSPB';
import { LableAndHelpXs } from '../LableAndHelpXs';
import { ButtonOccurs } from '../ButtonOccurs';
import { ConnectForm } from '../../../contexts/ConnectForm';
import { ErrorMessage } from '@hookform/error-message';
import { RegisterOptions } from 'react-hook-form';

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

  const [choiceSet, setChoiceSet] = useState(true);
  const [isReadyOnly] = useState<boolean>(typeof props.fixed !== 'undefined');

  const validationAndError = (props: InputXsStringProps): RegisterOptions => {
    const validate1 = { shouldUnregister: !choiceSet };

    const validate2 = props.fixed ? { value: props.fixed } : {};

    const validate3 = {
      required: {
        value: true,
        message: `${props.name} é obrigatório`,
      },
    };

    const validate4 = props.maxLength
      ? {
          minLength: {
            value: props.minLength ? props.minLength : 0,
            message: `${props.name} tamanho mínimo de ${props.minLength} caracteres`,
          },
        }
      : {};
    const validate5 = props.maxLength
      ? {
          maxLength: {
            value: props.maxLength ? props.maxLength : 1,
            message: `${props.name} tamanho maximo de ${props.maxLength} caracteres`,
          },
        }
      : {};

    const validate6 = props.pattern
      ? {
          pattern: {
            value: RegExp(props.pattern),
            message: `${props.name} deve respeitar o formato ${props.pattern}.`,
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
      choice = props.choice;
    }

    setChoiceSet(choice);
  }, [props.choice]);

  return (
    <Container choice={!!choiceSet}>
      {choiceSet && (
        <>
          <LableAndHelpXs
            name={props.name}
            NomeCampo={props.NomeCampo}
            DescricaoCampo={props.DescricaoCampo}
            DescricaoTipo={props.DescricaoTipo}
          />
          <ButtonOccurs
            name={props.name}
            type={props.type}
            minOccurs={props.minOccurs}
            maxOccurs={props.maxOccurs}
            NomeCampo={props.NomeCampo}
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
          </ButtonOccurs>
        </>
      )}
    </Container>
  );
}
