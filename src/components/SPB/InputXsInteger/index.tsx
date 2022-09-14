import { ErrorMessage } from '@hookform/error-message';
import { useEffect, useState } from 'react';
import { ConnectForm } from '../../../contexts/ConnectForm';
import { ButtonOccurs } from '../ButtonOccurs';
import { LableAndHelpXs } from '../LableAndHelpXs';
import { checkInput } from '../../../util/util';

import {
  Input,
  Container,
  InputContainer,
  ErrorMsg,
} from '../styles/stylesInputSPB';

interface InputXsIntegerProps {
  choice?: boolean;
  name: string;
  type?: string;
  base?: string;
  NomeCampo: string;
  DescricaoCampo?: string;
  DescricaoTipo?: string;
  totalDigits?: number;
  xmlStack: string;
  tagRef?: string;
  fixed?: string;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  minOccurs?: number;
  maxOccurs?: string | number;
}

export function InputXsInteger(props: InputXsIntegerProps) {
  const xmlStackLocal = props.xmlStack;
  const [choiceSet, setChoiceSet] = useState(true);
  const [isReadyOnly] = useState<boolean>(typeof props.fixed !== 'undefined');

  useEffect(() => {
    let choice = true;
    if (props.choice === undefined) {
      choice = true;
    } else {
      choice = props.choice;
    }
    setChoiceSet(choice);
  }, [props.choice]);

  return (
    <Container choice={choiceSet}>
      {choiceSet && (
        <>
          <LableAndHelpXs
            name={props.name}
            NomeCampo={props.NomeCampo}
            DescricaoCampo={props.DescricaoCampo}
            DescricaoTipo={props.DescricaoTipo}
          />
          <ButtonOccurs
            name={props.name}
            type={props.type}
            minOccurs={props.minOccurs}
            maxOccurs={props.maxOccurs}
            NomeCampo={props.NomeCampo}
          >
            <ConnectForm>
              {({ register, formState: { errors } }) => (
                <InputContainer>
                  <Input
                    type="text"
                    readOnly={isReadyOnly}
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
        </>
      )}
    </Container>
  );
}
