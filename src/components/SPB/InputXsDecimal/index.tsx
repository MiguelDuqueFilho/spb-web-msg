import { useState, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

import { Container, InputContainer, Input, ErrorMsg } from './styles';
import { LabelAndOccurs } from '../LableAndOccurs';

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
  const [isChoice, SetIsChoice] = useState(true);
  const {
    unregister,
    register,
    formState: { errors },
  } = useFormContext();

  const [isReadyOnly] = useState<boolean>(typeof props.fixed !== 'undefined');

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
            NomeCampo={props.NomeCampo}
            DescricaoCampo={props.DescricaoCampo}
            DescricaoTipo={props.DescricaoTipo}
            minOccurs={props.minOccurs}
            maxOccurs={props.maxOccurs}
          >
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
                // intlConfig={{ locale: 'pt-BR', currency: 'BRL' }}
                disableAbbreviations={true}
                disableGroupSeparators={true}
                {...register(xmlStackLocal, {
                  shouldUnregister: !isChoice,
                  value: props.fixed ? props.fixed : '',
                  required: `${props.NomeCampo} é obrigatório`,
                  setValueAs: (v) => v.replace(',', '.'),
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
