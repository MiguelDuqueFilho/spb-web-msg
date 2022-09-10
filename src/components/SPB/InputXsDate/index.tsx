import { ChangeEvent, MouseEvent, useEffect, useState } from 'react';
import { Info } from 'phosphor-react';
import { Em, Input, InputXsDateContainer, Label, Span, Button } from './styles';

interface InputXsDateProps {
  choice: boolean;
  name?: string;
  NomeCampo?: string;
  DescricaoCampo?: string;
  values?: string;
  currentValue?: string;
  required?: boolean;
  changeHandler?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function InputXsDate(props: InputXsDateProps) {
  const [choiceSet, setChoiceSet] = useState(true);
  const [inputXsDate, setInputXsDate] = useState(
    '01-01-2022'.toString().substring(0, 10)
  );
  const [isFieldHelp, setIsFieldHelp] = useState(false);

  const [isRequired] = useState(true);

  function handleChangeInput(event: ChangeEvent<HTMLInputElement>) {
    setInputXsDate(event.target.value);
    console.log(`InputXsDate : ${event.target.name} - ${event.target.value}`);
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
      choice = !!props.choice;
    }
    setChoiceSet(choice);
  }, [props.choice]);

  return (
    <InputXsDateContainer choice={!!choiceSet}>
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
            type="date-local"
            id={props.name}
            name={props.name}
            onChange={handleChangeInput}
            required={isRequired}
            value={inputXsDate}
          />
        </>
      )}
    </InputXsDateContainer>
  );
}
