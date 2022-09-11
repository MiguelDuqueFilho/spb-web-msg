import { ChangeEvent, MouseEvent, useEffect, useState } from 'react';
import { Info } from 'phosphor-react';
import {
  Em,
  Input,
  InputXsDateTimeContainer,
  Label,
  Span,
  Button,
} from './styles';

interface InputXsDateTimeProps {
  choice?: boolean;
  name?: string;
  NomeCampo?: string;
  DescricaoCampo?: string;
  minOccurs?: number;
  // values?: string;
  // currentValue?: string;
  // changeHandler?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function InputXsDateTime(props: InputXsDateTimeProps) {
  const [choiceSet, setChoiceSet] = useState(true);
  const [inputXsDateTime, setInputXsDateTime] = useState(
    '0001-01-01T00:00'.toString().substring(0, 16)
  );
  const [isFieldHelp, setIsFieldHelp] = useState(false);

  const [isRequired] = useState<boolean>(
    typeof props.minOccurs === 'undefined'
  );

  function handleChangeInput(event: ChangeEvent<HTMLInputElement>) {
    setInputXsDateTime(event.target.value);
    console.log(
      `InputXsDateTime : ${event.target.name} - ${event.target.value}`
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
      choice = !!props.choice;
    }
    setChoiceSet(choice);
  }, [props.choice]);

  return (
    <InputXsDateTimeContainer choice={!!choiceSet}>
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
          <Input
            type="datetime-local"
            id={props.name}
            name={props.name}
            onChange={handleChangeInput}
            required={isRequired}
            value={inputXsDateTime}
          />
        </>
      )}
    </InputXsDateTimeContainer>
  );
}
