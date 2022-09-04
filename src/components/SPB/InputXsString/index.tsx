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
  type?: string;
  NomeCampo?: string;
  DescricaoCampo?: string;
  DescricaoTipo?: string;
  base?: string;
  tagRef?: string;
  fixed?: string;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  values?: string;
  currentValue?: string;
  required?: boolean;
  changeHandler?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function InputXsString(props: InputXsStringProps) {
  const [InputXsString, setInputXsString] = useState(
    props.fixed ? props.fixed : ''
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

  return (
    <InputXsStringContainer>
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
        name={props.name}
        onChange={handleChangeInput}
        required={!!props.required}
        pattern={props.pattern}
        readOnly={!!props.fixed}
        value={InputXsString}
        min={props.minLength}
        max={props.maxLength}
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
