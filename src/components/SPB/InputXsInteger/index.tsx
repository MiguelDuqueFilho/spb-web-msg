import { ChangeEvent, MouseEvent, useState } from 'react';
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

export function InputXsInteger({
  name,
  NomeCampo,
  DescricaoCampo,
  DescricaoTipo,
  totalDigits,
  currentValue,
  changeHandler,
  required = false,
}: InputXsIntegerProps) {
  const [InputXsInteger, setInputXsInteger] = useState<string>();
  const [isFieldHelp, setIsFieldHelp] = useState(false);

  const [isRequired] = useState(required);

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

  return (
    <InputXsIntegerContainer>
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
        type="text"
        id={name}
        name={name}
        onChange={handleChangeInput}
        required={isRequired}
        pattern={`[0-9]{0,${totalDigits}}`}
        value={InputXsInteger}
        maxLength={totalDigits}
      />
    </InputXsIntegerContainer>
  );
}

// ;<xs:simpleType name="SitLancSTR">
//   <xs:annotation>
//     <xs:documentation>
//       <cat:InfTipo>
//         <cat:DescricaoTipo>
//           Situa��o de um lan�amento que foi comandado no STR.
//         </cat:DescricaoTipo>
//       </cat:InfTipo>
//     </xs:documentation>
//   </xs:annotation>
//   <xs:restriction base="xs:integer">
//     <xs:totalDigits value="3" />
//   </xs:restriction>
// </xs:simpleType>
