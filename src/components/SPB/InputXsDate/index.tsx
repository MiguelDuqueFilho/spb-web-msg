import { ChangeEvent, MouseEvent, useState } from 'react';
import { Info } from 'phosphor-react';
import { Em, Input, InputXsDateContainer, Label, Span, Button } from './styles';

interface InputXsDateProps {
  name?: string;
  NomeCampo?: string;
  DescricaoCampo?: string;
  values?: string;
  currentValue?: string;
  required?: boolean;
  changeHandler?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function InputXsDate({
  name,
  NomeCampo,
  DescricaoCampo,
  changeHandler,
  required = false,
}: InputXsDateProps) {
  const [inputXsDate, setInputXsDate] = useState(
    '01-01-2022'.toString().substring(0, 10)
  );
  const [isFieldHelp, setIsFieldHelp] = useState(false);

  const [isRequired] = useState(required);

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

  return (
    <InputXsDateContainer>
      <Label htmlFor={name}>
        <Button type="button" onClick={handleFieldHelp}>
          <Info size={20} />
        </Button>
        <Span>
          <a tabIndex={-1}>{NomeCampo}</a>
        </Span>
        <Em isFieldHelp={isFieldHelp}>{DescricaoCampo}</Em>
      </Label>
      <Input
        type="date-local"
        id={name}
        name={name}
        onChange={handleChangeInput}
        required={isRequired}
        value={inputXsDate}
      />
    </InputXsDateContainer>
  );
}
