import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

import {
  Container,
  InputContainer,
  Input,
  ErrorMsg,
  ContainerBase,
} from './styles';
import { FieldLabel } from '../FieldLabel';

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
  fractionDigits?: number;
  minExclusive?: bigint;
  maxExclusive?: bigint;

  sequence?: number;
  removeChild?: (sequence: number) => void;
}

export function InputXsDecimal(props: InputXsDecimalProps) {
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
              // shouldUnregister: !isChoice,
              value: props.fixed ? props.fixed : '',
              required: `${props.NomeCampo} é obrigatório`,
              setValueAs: (v) => v.replace(',', '.'),
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
