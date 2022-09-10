import { ChangeEvent, MouseEvent, useEffect, useState } from 'react';
import { Info } from 'phosphor-react';
import {
  Em,
  Input,
  InputXsIntegerContainer,
  Label,
  Span,
  Button,
} from './styles';

interface InputXsIntegerProps {
  choice?: boolean;
  name?: string;
  NomeCampo?: string;
  DescricaoCampo?: string;
  DescricaoTipo?: string;
  values?: string;
  totalDigits?: number;
  currentValue?: string;
  required?: boolean;
  changeHandler?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function InputXsInteger(props: InputXsIntegerProps) {
  const [choiceSet, setChoiceSet] = useState(true);
  const [inputXsInteger, setInputXsInteger] = useState<string>();
  const [isFieldHelp, setIsFieldHelp] = useState(false);

  const [isRequired] = useState(true);

  function handleChangeInput(event: ChangeEvent<HTMLInputElement>) {
    setInputXsInteger(event.target.value.replace(/\D/g, ''));
    console.log(
      `InputXsInteger : ${event.target.name} - ${event.target.value}`
    );
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
    <InputXsIntegerContainer choice={choiceSet}>
      {choiceSet && (
        <>
          <Label htmlFor={props.name}>
            <Button type="button" onClick={handleFieldHelp}>
              <Info size={20} />
            </Button>
            <Span>
              <a tabIndex={-1}>{props.NomeCampo}</a>
            </Span>
            <Em isFieldHelp={isFieldHelp}>{props.DescricaoCampo}</Em>
          </Label>
          <Input
            type="text"
            id={props.name}
            name={props.name}
            onChange={handleChangeInput}
            required={isRequired}
            pattern={`[0-9]{0,${props.totalDigits}}`}
            value={inputXsInteger}
            maxLength={props.totalDigits}
          />
        </>
      )}
    </InputXsIntegerContainer>
  );
}
