import { useState, useEffect } from 'react';

import { Container, InputContainer, ErrorMsg } from '../styles/stylesInputSPB';
import { Input } from './styles';
import { LabelAndOccurs } from '../LableAndOccurs';

import { ConnectForm } from '../../../contexts/ConnectForm';
import { ErrorMessage } from '@hookform/error-message';
import { RegisterOptions, useFormContext } from 'react-hook-form';

interface InputXsDateProps {
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
  minOccurs?: number;
  maxOccurs?: string | number;
}

export function InputXsDate(props: InputXsDateProps) {
  const xmlStackLocal = props.xmlStack;
  const { unregister } = useFormContext();
  const [isChoice, SetIsChoice] = useState(true);
  const [isReadyOnly] = useState<boolean>(typeof props.fixed !== 'undefined');

  const validationAndError = (props: InputXsDateProps): RegisterOptions => {
    const validate1 = { shouldUnregister: !isChoice };

    const validate2 = props.fixed ? { value: props.fixed } : {};

    const validate3 = {
      required: {
        value: true,
        message: `${props.name} é obrigatório`,
      },
    };

    const result: RegisterOptions = {
      ...validate1,
      ...validate2,
      ...validate3,
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
                    type="date-local"
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
