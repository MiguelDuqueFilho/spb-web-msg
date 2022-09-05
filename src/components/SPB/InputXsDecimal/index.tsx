import { ChangeEvent, MouseEvent, useState } from 'react';
import { Info, Ruler } from 'phosphor-react';
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
  DescricaoTipo?: string;
  values?: string;
  currentValue?: string;
  totalDigits?: number;
  fractionDigits?: number;
  minExclusive: number;
  maxExclusive: number;
  required?: boolean;
  changeHandler?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const delay = 7; // seconds

export function InputXsDecimal({
  name,
  NomeCampo,
  DescricaoCampo,
  DescricaoTipo,
  changeHandler,
  totalDigits,
  fractionDigits,
  minExclusive,
  maxExclusive,
  required = false,
}: InputXsDecimalProps) {
  const [InputXsDecimal, setInputXsDecimal] = useState<number>();
  const [isFieldHelp, setIsFieldHelp] = useState(false);
  const [descriptionType, setDescriptionType] = useState<string | undefined>();

  const [isRequired] = useState(required);

  function handleChangeInput(
    value: string | undefined,
    name: string | undefined,
    values: CurrencyInputOnChangeValues | undefined
  ) {
    if (Number(value) > minExclusive && Number(value) < maxExclusive) {
      setInputXsDecimal(Number(value));
    }

    console.log(`InputXsDecimal : ${value} - ${name} - ${values}`);
  }

  function handleFieldHelp(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    setDescriptionType(DescricaoCampo);
    showField();
  }

  function handleTypeHelp(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    setDescriptionType(DescricaoTipo);
    showField();
  }

  async function showField() {
    if (!isFieldHelp) {
      setIsFieldHelp(true);
      setTimeout(() => setIsFieldHelp(false), delay * 1000);
    } else {
      setIsFieldHelp(false);
    }
  }

  return (
    <InputXsDecimalContainer>
      <Label htmlFor={name}>
        {DescricaoCampo && (
          <Button type="button" onClick={handleFieldHelp}>
            <Info size={20} />
          </Button>
        )}
        {DescricaoTipo && (
          <Button type="button" onClick={handleTypeHelp}>
            <Ruler size={20} />
          </Button>
        )}
        <Span>
          <a tabIndex={-1}>{NomeCampo}</a>
        </Span>
        <Em isFieldHelp={isFieldHelp}>{descriptionType}</Em>
      </Label>
      <Input
        className="CurrencyInput"
        id={name}
        name={name}
        defaultValue={InputXsDecimal}
        maxLength={totalDigits}
        decimalsLimit={fractionDigits}
        decimalScale={fractionDigits}
        fixedDecimalLength={fractionDigits}
        allowDecimals={!!fractionDigits}
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
