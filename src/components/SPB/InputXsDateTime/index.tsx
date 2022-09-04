import { ChangeEvent, MouseEvent, useState } from 'react';
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
  name?: string;
  NomeCampo?: string;
  DescricaoCampo?: string;
  values?: string;
  currentValue?: string;
  required?: boolean;
  changeHandler?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function InputXsDateTime({
  name,
  NomeCampo,
  DescricaoCampo,
  changeHandler,
  required = false,
}: InputXsDateTimeProps) {
  const [InputXsDateTime, setInputXsDateTime] = useState(
    '0001-01-01T00:00'.toString().substring(0, 16)
  );
  const [isFieldHelp, setIsFieldHelp] = useState(false);

  const [isRequired] = useState(required);

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

  return (
    <InputXsDateTimeContainer>
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
        type="datetime-local"
        id={name}
        name={name}
        onChange={handleChangeInput}
        required={isRequired}
        value={InputXsDateTime}
        data-xsd-primitive="xs:datetime"
      />
    </InputXsDateTimeContainer>
  );
}
// ;<xs:element name="DtVenc" type="xs:date" minOccurs="0">
//   <xs:annotation>
//     <xs:documentation>
//       <cat:InfCampo>
//         <cat:NomeCampo>Data Vencimento</cat:NomeCampo>
//         <cat:DescricaoCampo>Data de Vencimento</cat:DescricaoCampo>
//       </cat:InfCampo>
//     </xs:documentation>
//   </xs:annotation>
// </xs:element>
