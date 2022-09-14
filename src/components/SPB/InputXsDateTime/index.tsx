import { useState, useEffect } from 'react';

import { Container, InputContainer, ErrorMsg } from '../styles/stylesInputSPB';
import { Input } from './styles';
import { LableAndHelpXs } from '../LableAndHelpXs';
import { ButtonOccurs } from '../ButtonOccurs';
import { ConnectForm } from '../../../contexts/ConnectForm';
import { ErrorMessage } from '@hookform/error-message';
import { checkInput } from '../../../util/util';

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
  const [choiceSet, setChoiceSet] = useState(true);
  const [isReadyOnly] = useState<boolean>(typeof props.fixed !== 'undefined');

  useEffect(() => {
    let choice = true;
    if (props.choice === undefined) {
      choice = true;
    } else {
      choice = !!props.choice;
    }
    setChoiceSet(choice);
  }, [props.choice]);

  return (
    <Container choice={!!choiceSet}>
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
                    type="datetime-local"
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
