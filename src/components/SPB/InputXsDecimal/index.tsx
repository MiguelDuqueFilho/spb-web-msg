import { ChangeEvent, MouseEvent, SetStateAction, useState } from 'react';
import { Info } from 'phosphor-react';
import {
  Input,
  Em,
  InputXsDecimalContainer,
  Label,
  Span,
  Button,
} from './styles';
import { CurrencyInputOnChangeValues } from 'react-currency-input-field/dist/components/CurrencyInputProps';

interface InputXsDecimalProps {
  name?: string;
  NomeCampo?: string;
  DescricaoCampo?: string;
  values?: string;
  currentValue?: string;
  totalDigits?: string;
  fractionDigits?: string;
  minExclusive?: string;
  maxExclusive?: string;
  required?: boolean;
  changeHandler?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const delay = 5; // seconds
export function InputXsDecimal({
  name,
  NomeCampo,
  DescricaoCampo,
  changeHandler,
  totalDigits,
  fractionDigits,
  minExclusive,
  maxExclusive,
  required = false,
}: InputXsDecimalProps) {
  const [InputXsDecimal, setInputXsDecimal] = useState('0');
  const [isFieldHelp, setIsFieldHelp] = useState(false);

  const [isRequired] = useState(required);

  function handleChangeInput(
    value: string | undefined,
    name: string | undefined,
    values: CurrencyInputOnChangeValues | undefined
  ) {
    if (value) setInputXsDecimal(value);

    console.log(`InputXsDecimal : ${value} - ${name} - ${values}`);
  }

  function handleFieldHelp(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    function showFieldHelp() {
      setIsFieldHelp(false);
    }
    if (isFieldHelp) {
      setIsFieldHelp(false);
    } else {
      setTimeout(showFieldHelp, delay * 1000);
      setIsFieldHelp(true);
    }
  }

  return (
    <InputXsDecimalContainer>
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
        className="CurrencyInput"
        id={name}
        name={name}
        placeholder="Entre com o valor"
        defaultValue={InputXsDecimal}
        maxLength={Number(totalDigits)}
        decimalsLimit={Number(fractionDigits)}
        decimalScale={Number(fractionDigits)}
        fixedDecimalLength={Number(fractionDigits) > 0 ? 1 : 0}
        allowDecimals={Number(fractionDigits) > 0}
        prefix="R$"
        // decimalSeparator=","
        // groupSeparator="."
        required={isRequired}
        intlConfig={{ locale: 'pt-BR', currency: 'BRL' }}
        allowNegativeValue={true}
        disableGroupSeparators={false}
        disableAbbreviations={true}
        onValueChange={handleChangeInput}
      />
    </InputXsDecimalContainer>
  );
}
// ;<xs:simpleType name="Valor">
//   <xs:annotation>
//     <xs:documentation>
//       <cat:InfTipo>
//         <cat:DescricaoTipo>
//           Valor. At� dezessete inteiros e dois decimais e sinalizado. Para
//           valores menores que zero, o valor ser� precedido pelo sinal "-".
//           Exemplo: para 20 negativo informe -20 . Deve ser informado o ponto
//           separador caso tenha decimais. Exemplo: para R$100,00 informe 100;
//           para R$100,10 informe 100.1; para R$100,11 informe 100.11; para
//           R$100,11 negativo informe -100.11
//         </cat:DescricaoTipo>
//       </cat:InfTipo>
//     </xs:documentation>
//   </xs:annotation>
//   <xs:restriction base="xs:decimal">
//     <xs:totalDigits value="19" />
//     <xs:fractionDigits value="2" />
//     <xs:minExclusive value="-100000000000000000" />
//     <xs:maxExclusive value="100000000000000000" />
//   </xs:restriction>
// </xs:simpleType>
