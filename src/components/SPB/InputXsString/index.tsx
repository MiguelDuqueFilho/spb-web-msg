import { ChangeEvent, MouseEvent, useState, useEffect } from 'react';
import { Info } from 'phosphor-react';

import {
  Em,
  Input,
  InputXsStringContainer,
  Label,
  Span,
  Button,
} from './styles';

interface InputXsStringProps {
  choice?: boolean;
  name?: string;
  type?: string;
  base?: string;
  NomeCampo?: string;
  DescricaoCampo?: string;
  DescricaoTipo?: string;
  tagRef?: string;
  fixed?: string;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  minOccurs?: number;
  maxOccurs?: string | number;
  // values?: string;
  // currentValue?: string;
  // changeHandler?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function InputXsString(props: InputXsStringProps) {
  const [choiceSet, setChoiceSet] = useState(true);
  const [InputXsString, setInputXsString] = useState(
    props.fixed ? props.fixed : ''
  );

  const [isRequired] = useState<boolean>(
    typeof props.minOccurs === 'undefined'
  );

  const [isFieldHelp, setIsFieldHelp] = useState(false);

  function handleChangeInput(event: ChangeEvent<HTMLInputElement>) {
    setInputXsString(event.target.value);
  }

  function handleFieldHelp(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    function expireFieldHelp() {
      setIsFieldHelp(false);
    }
    setTimeout(expireFieldHelp, 4000);
    setIsFieldHelp(true);
  }

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
    <InputXsStringContainer choice={!!choiceSet}>
      {choiceSet && (
        <>
          <Label htmlFor={props.name}>
            <Button
              type="button"
              onClick={handleFieldHelp}
              title="Informação do campo"
            >
              <Info size={20} />
            </Button>
            <Span>
              <a tabIndex={-1}>{props.NomeCampo}</a>
            </Span>
            <Em isFieldHelp={isFieldHelp}>{props.DescricaoCampo}</Em>
          </Label>
          {/* <ButtonOccurs
            name={props.name}
            type={props.type}
            minOccurs={props.minOccurs}
            maxOccurs={props.maxOccurs}
            NomeCampo={props.NomeCampo}
          > */}
          <Input
            type="text"
            name={props.name}
            onChange={handleChangeInput}
            required={isRequired}
            pattern={props.pattern}
            readOnly={!!props.fixed}
            value={InputXsString}
            min={props.minLength}
            max={props.maxLength}
          />
          {/* </ButtonOccurs> */}
        </>
      )}
    </InputXsStringContainer>
  );
}
