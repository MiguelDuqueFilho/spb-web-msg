import { ReactNode, MouseEvent, useEffect, useState } from 'react';
import { Info, Ruler } from 'phosphor-react';
import { Em, Label, Span, Button, InputXsBaseContainer } from './styles';

interface InputXsBaseProps {
  children: ReactNode;
  choice?: boolean;
  name?: string;
  type?: string;
  base?: string;
  tagRef?: string;
  NomeCampo?: string;
  DescricaoCampo?: string;
  DescricaoTipo?: string;
  fixed?: string;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  minOccurs?: number;
  maxOccurs?: string | number;
  totalDigits?: number;
  fractionDigits?: number;
  minExclusive?: number;
  maxExclusive?: number;

  // currentValue?: string;
  // values?: string;
  // changeHandler?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const delay = 7; // seconds

export function InputXsBase(props: InputXsBaseProps) {
  const [choiceSet, setChoiceSet] = useState(true);
  const [isFieldHelp, setIsFieldHelp] = useState(false);
  const [descriptionType, setDescriptionType] = useState<string | undefined>();

  const [isRequired] = useState<boolean>(
    typeof props.minOccurs === 'undefined'
  );

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
    <InputXsBaseContainer choice={choiceSet}>
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
          {props.children}
        </>
      )}
    </InputXsBaseContainer>
  );
}
