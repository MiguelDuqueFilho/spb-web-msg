import { Container, Input, InputContainer, ErrorMsg } from './styles';

import { ErrorMessage } from '@hookform/error-message';
import { ConnectForm } from '../../../contexts/ConnectForm';
import { LableAndHelpXs } from '../LableAndHelpXs';
import { ButtonOccurs } from '../ButtonOccurs';
import { checkInput } from '../../../util/util';

interface USERMSGProps {
  choice?: boolean;
  name: string;
  type: string;
  description?: string;
  childRef?: string;
  base?: string;
  tagRef?: string;
  xmlStack: any;
  minOccurs?: number;
  maxLength: number;
}

export function USERMSG(props: USERMSGProps) {
  const xmlStackLocal = props.xmlStack;

  return (
    <Container>
      <LableAndHelpXs
        name={props.name}
        NomeCampo={props.name}
        DescricaoCampo={props.description}
      />
      <ButtonOccurs
        name={props.name}
        type={props.type}
        minOccurs={props.minOccurs}
        NomeCampo={props.description}
      >
        <ConnectForm>
          {({ register, formState: { errors } }) => (
            <InputContainer>
              <Input
                type="text"
                {...register(xmlStackLocal, checkInput(props))}
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
      </ButtonOccurs>
    </Container>
  );
}
