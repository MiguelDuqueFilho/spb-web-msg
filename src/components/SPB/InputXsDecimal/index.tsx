import { ChangeEvent, MouseEvent, useEffect, useState } from 'react';
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
  choice?: boolean;
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

export function InputXsDecimal(props: InputXsDecimalProps) {
  const [choiceSet, setChoiceSet] = useState(true);
  const [inputXsDecimal, setInputXsDecimal] = useState<number>();
  const [isFieldHelp, setIsFieldHelp] = useState(false);
  const [descriptionType, setDescriptionType] = useState<string | undefined>();

  const [isRequired] = useState(true);

  function handleChangeInput(
    value: string | undefined,
    name: string | undefined,
    values: CurrencyInputOnChangeValues | undefined
  ) {
    if (
      Number(value) > props.minExclusive &&
      Number(value) < props.maxExclusive
    ) {
      setInputXsDecimal(Number(value));
    }

    console.log(`InputXsDecimal : ${value} - ${name} - ${values}`);
  }

  function handleFieldHelp(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    setDescriptionType(props.DescricaoCampo);
    showField();
  }

  function handleTypeHelp(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    setDescriptionType(props.DescricaoTipo);
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
    <InputXsDecimalContainer choice={choiceSet}>
      {choiceSet && (
        <>
          <Label htmlFor={props.name}>
            {props.DescricaoCampo && (
              <Button
                type="button"
                onClick={handleFieldHelp}
                title="Informação do campo"
              >
                <Info size={20} />
              </Button>
            )}
            {props.DescricaoTipo && (
              <Button
                type="button"
                onClick={handleTypeHelp}
                title="regra do campo"
              >
                <Ruler size={20} />
              </Button>
            )}
            <Span>
              <a tabIndex={-1}>{props.NomeCampo}</a>
            </Span>
            <Em isFieldHelp={isFieldHelp}>{descriptionType}</Em>
          </Label>
          <Input
            className="CurrencyInput"
            id={props.name}
            name={props.name}
            defaultValue={inputXsDecimal}
            maxLength={props.totalDigits}
            decimalsLimit={props.fractionDigits}
            decimalScale={props.fractionDigits}
            fixedDecimalLength={props.fractionDigits}
            allowDecimals={!!props.fractionDigits}
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
        </>
      )}
    </InputXsDecimalContainer>
  );
}
