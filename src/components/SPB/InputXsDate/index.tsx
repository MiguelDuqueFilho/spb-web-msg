import { useState, useEffect } from 'react';
import moment from 'moment';
import 'moment/locale/pt-br';
import { ErrorMsg } from '../styles/stylesInputSPB';
import { InputDataPicker, InputContainer, Container } from './styles';
import { LabelAndOccurs } from '../LableAndOccurs';
import { ErrorMessage } from '@hookform/error-message';
import { useFormContext } from 'react-hook-form';

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
  const [isChoice, SetIsChoice] = useState(true);
  const {
    unregister,
    register,
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
              <InputDataPicker
                type="date"
                max={moment().format('YYYY-MM-DD')}
                {...register(xmlStackLocal, {
                  required: `${props.NomeCampo} é obrigatório`,
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
