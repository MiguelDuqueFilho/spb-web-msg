import { useState, useEffect, useContext } from 'react';
import moment from 'moment';
import 'moment/locale/pt-br';
import { InputContainer, ErrorMsg } from '../styles/stylesInputSPB';
import { InputDataPicker, InputIconCustom, Container } from './styles';
import { LabelAndOccurs } from '../LableAndOccurs';

import gregorian from 'react-date-object/calendars/gregorian';
import { ptBr } from '../../../util/calendar.js';

import { ErrorMessage } from '@hookform/error-message';
import {
  RegisterOptions,
  useFormContext,
  // useController,
} from 'react-hook-form';
import { DateObject } from 'react-multi-date-picker';
import { ConnectForm } from '../../../contexts/ConnectForm';

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

// const validationAndError = (props: InputXsDateProps): RegisterOptions => {
//   // const validate1 = {
//   shouldUnregister: true,
// };

// const validate2 = props.fixed ? { value: props.fixed } : {};

// const validate3 = {
//   required: {
//     value: true,
//     message: `${props.NomeCampo} é obrigatório`,
//   },
// };

// const validate4 = {
//   pattern: {
//     value: /[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/,
//     message: `${props.NomeCampo} invalido`,
//   },
// };

//   const result: RegisterOptions = {
//     shouldUnregister: true,
//     value: props.fixed ? props.fixed : null,
//     required: `${props.NomeCampo} é obrigatório`,
//     pattern: {
//       value: /[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/,
//       message: `${props.NomeCampo} invalido`,
//     },
//   };

//   return result;
// };

export function InputXsDate(props: InputXsDateProps) {
  const xmlStackLocal = props.xmlStack;
  const [isChoice, SetIsChoice] = useState(true);
  const {
    unregister,
    register,
    // control,
    formState: { errors },
  } = useFormContext();

  // const {
  //   field: { onChange, name, value, ref, ...rest },
  //   fieldState: { isTouched, isDirty },
  //   formState: { touchedFields, dirtyFields },
  // } = useController({
  //   name: xmlStackLocal,
  //   control,
  //   rules: {
  //     shouldUnregister: true,
  //     value: props.fixed ? props.fixed : null,
  //     required: `${props.NomeCampo} é obrigatório`,
  //     // pattern: {
  //     //   value: /[0-9]{4}-(0[1-9]|[0-1][0-9])-(0[1-9]|[1-2][0-9]|3[0-1])/,
  //     //   message: `${props.NomeCampo} invalido`,
  //     // },
  //     validate: {
  //       testRegex: (value) =>
  //         /[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/.test(value),
  //     },
  //   },
  //   defaultValue: '',
  // });

  // const {
  //   unregister,
  //   register,
  //   formState: { errors },
  // } = useFormContext();

  // const { name, ref, onChange, ...rest } = register(
  //   xmlStackLocal,
  //   validationAndError(props)
  // );

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
              <InputContainer>
                <InputDataPicker
                  type="date"
                  max={moment().format('YYYY-MM-DD')}
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
