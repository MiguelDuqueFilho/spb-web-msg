import { useFormContext } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import moment from 'moment';
import 'moment/locale/pt-br';
import { FieldLabel } from '../FieldLabel';

import {
  Container,
  InputContainer,
  InputDataTimePicker,
  ErrorMsg,
  ContainerBase,
} from './styles';

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

  sequence?: number;
  removeChild?: (sequence: number) => void;
}

export function InputXsDateTime(props: InputXsDateTimeProps) {
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
          <InputDataTimePicker
            type="datetime-local"
            step="1"
            max={moment().format('YYYY-MM-DD HH:mm:ss')}
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
