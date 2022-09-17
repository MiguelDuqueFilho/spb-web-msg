import { useState, useEffect } from 'react';

import { Container, InputContainer, ErrorMsg } from '../styles/stylesInputSPB';
import { Input } from './styles';
import { LabelAndOccurs } from '../LableAndOccurs';
import DataPicker from 'react-multi-date-picker';
import TimePicker from 'react-multi-date-picker/plugins/time_picker';
import gregorian from 'react-date-object/calendars/gregorian';
import { ptBr } from '../../../util/calendar.js';
import InputIcon from 'react-multi-date-picker/components/input_icon';
import { ErrorMessage } from '@hookform/error-message';
import { RegisterOptions, useFormContext } from 'react-hook-form';

interface InputXsDateTimeProps {
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

export function InputXsDateTime(props: InputXsDateTimeProps) {
  const xmlStackLocal = props.xmlStack;
  const {
    unregister,
    register,
    formState: { errors },
  } = useFormContext();
  const [isChoice, SetIsChoice] = useState(true);
  const [isReadyOnly] = useState<boolean>(typeof props.fixed !== 'undefined');

  const validationAndError = (props: InputXsDateTimeProps): RegisterOptions => {
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

  const { name, ref, onChange, ...rest } = register(
    xmlStackLocal,
    validationAndError(props)
  );

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
            <InputContainer>
              <DataPicker
                name={name}
                {...rest}
                onChange={(date) =>
                  onChange({ target: { name, value: date?.toString() } })
                }
                format="YYYY-MM-DD HH:mm:ss"
                calendar={gregorian}
                locale={ptBr}
                // eslint-disable-next-line react/jsx-key
                plugins={[<TimePicker position="bottom" />]}
                render={<InputIcon />}
                calendarPosition="left"
                className="bg-dark"
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
        </>
      )}
    </Container>
  );
}
