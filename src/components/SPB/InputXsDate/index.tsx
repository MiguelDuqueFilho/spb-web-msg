import { useFormContext } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import moment from 'moment';
import 'moment/locale/pt-br';
import { FieldLabel } from '../FieldLabel';

import {
  Container,
  InputContainer,
  ErrorMsg,
  ContainerBase,
  InputDataPicker,
} from './styles';

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

  sequence?: number;
  removeChild?: (sequence: number) => void;
}

export function InputXsDate(props: InputXsDateProps) {
  const xmlStackLocal = props.xmlStack;

  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <ContainerBase>
      <Container>
        <FieldLabel {...props} />
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
            render={({ message }) => message && <ErrorMsg>{message}</ErrorMsg>}
          />
        </InputContainer>
      </Container>
    </ContainerBase>
  );
}
