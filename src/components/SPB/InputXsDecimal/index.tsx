import { ErrorMessage } from '@hookform/error-message';
import { useEffect, useState } from 'react';
import { ConnectForm } from '../../../contexts/ConnectForm';
import { LabelAndOccurs } from '../LableAndOccurs';

import { Input } from './styles';
import { Container, InputContainer, ErrorMsg } from '../styles/stylesInputSPB';
import { RegisterOptions, useFormContext } from 'react-hook-form';

interface InputXsDecimalProps {
  choice?: boolean;
  name: string;
  type?: string;
  base?: string;
  childRef?: string;
  NomeCampo: string;
  DescricaoCampo?: string;
  DescricaoTipo?: string;
  xmlStack: string;
  tagRef?: string;
  fixed?: string;
  minOccurs?: number;
  maxOccurs?: string | number;
  totalDigits?: number;
  fractionDigits: number;
  minExclusive?: bigint;
  maxExclusive?: bigint;
}

export function InputXsDecimal(props: InputXsDecimalProps) {
  const xmlStackLocal = props.xmlStack;
  const { unregister } = useFormContext();
  const [isChoice, SetIsChoice] = useState(true);
  const [isReadyOnly] = useState<boolean>(typeof props.fixed !== 'undefined');

  const validationAndError = (props: InputXsDecimalProps): RegisterOptions => {
    const validate1 = { shouldUnregister: !isChoice };

    const validate2 = props.fixed ? { value: props.fixed } : {};

    const validate3 = {
      required: {
        value: true,
        message: `${props.name} é obrigatório`,
      },
    };

    const validate4 = props.totalDigits
      ? {
          maxLength: {
            value: props.totalDigits,
            message: `${props.name} tamanho maximo de ${props.totalDigits} caracteres`,
          },
        }
      : {};

    const validate5 = props.minExclusive
      ? {
          min: {
            value: `${props.minExclusive}n`,
            message: `${props.name} valor minimo ${props.minExclusive}`,
          },
        }
      : {};

    const validate6 = props.maxExclusive
      ? {
          min: {
            value: `${props.maxExclusive}n`,
            message: `${props.name} valor máximo ${props.maxExclusive}`,
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
    <Container choice={isChoice}>
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
                    type="CurrencyInput"
                    readOnly={isReadyOnly}
                    allowDecimals={!!props.fractionDigits}
                    allowNegativeValue={true}
                    maxLength={props.totalDigits}
                    decimalsLimit={props.fractionDigits}
                    decimalScale={props.fractionDigits}
                    fixedDecimalLength={0}
                    intlConfig={{ locale: 'pt-BR', currency: 'BRL' }}
                    disableAbbreviations={true}
                    disableGroupSeparators={true}
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
