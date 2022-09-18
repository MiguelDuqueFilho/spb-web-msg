import { useState, useEffect } from 'react';
import moment from 'moment';
import 'moment/locale/pt-br';
import { InputContainer, ErrorMsg } from '../styles/stylesInputSPB';
import { InputIconCustom, Container, InputDataTimePicker } from './styles';
import { LabelAndOccurs } from '../LableAndOccurs';

import TimerPicker from 'react-multi-date-picker/plugins/time_picker';
import gregorian from 'react-date-object/calendars/gregorian';
import { ptBr } from '../../../util/calendar.js';

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
  const [isChoice, SetIsChoice] = useState(true);
  const {
    unregister,
    register,
    // control,
    formState: { errors },
  } = useFormContext();

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
              <InputDataTimePicker
                type="datetime-local"
                step="1"
                max={moment().format('YYYY-MM-DD HH:MM:SS')}
                {...register(xmlStackLocal, { required: true })}
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
