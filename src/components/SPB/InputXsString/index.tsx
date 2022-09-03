import { ChangeEvent, MouseEvent, useState } from 'react';
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
  name?: string;
  NomeCampo?: string;
  DescricaoCampo?: string;
  values?: string;
  currentValue?: string;
  required?: boolean;
  changeHandler?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function InputXsString({
  name,
  NomeCampo,
  DescricaoCampo,
  changeHandler,
  required = false,
}: InputXsStringProps) {
  const [InputXsString, setInputXsString] = useState('Abcdefg');
  const [isFieldHelp, setIsFieldHelp] = useState(false);

  const [isRequired] = useState(required);

  function handleChangeInput(event: ChangeEvent<HTMLInputElement>) {
    setInputXsString(event.target.value);
    console.log(`InputXsString : ${event.target.name} - ${event.target.value}`);
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
    <InputXsStringContainer>
      <Label htmlFor={name}>
        <Button type="button" onClick={handleFieldHelp}>
          <Info size={16} />
        </Button>
        <Span>
          <a tabIndex={-1}>{NomeCampo}</a>
        </Span>
        <Em isFieldHelp={isFieldHelp}>{DescricaoCampo}</Em>
      </Label>
      <Input
        type="text"
        id={name}
        name={name}
        onChange={handleChangeInput}
        required={isRequired}
        pattern="[0-9]{8}"
        value={InputXsString}
        min={8}
        max={8}
        data-xsd-primitive="xs:string"
      />
    </InputXsStringContainer>
  );
}

// ;<xs:simpleType name="ISPB">
//   <xs:annotation>
//     <xs:documentation>
//       <cat:InfTipo>
//         <cat:DescricaoTipo>
//           Identificador da IF e C�mara junto ao Banco Central para o Sistema de
//           Pagamentos Brasileiro.
//         </cat:DescricaoTipo>
//       </cat:InfTipo>
//     </xs:documentation>
//   </xs:annotation>
//   <xs:restriction base="xs:string">
//     <xs:minLength value="8" />
//     <xs:maxLength value="8" />
//     <xs:pattern value="[0-9]{8}" />
//   </xs:restriction>
// </xs:simpleType>
