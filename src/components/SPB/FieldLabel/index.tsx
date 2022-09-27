import { MouseEvent, useState } from 'react';
import { Info, Ruler, XSquare } from 'phosphor-react';
import { Em, Span, Button, DescContainer, ButtonX, Label } from './styles';

interface FieldLabelProps {
  name: string;
  xmlStack: string;
  type?: string;
  NomeCampo?: string;
  DescricaoCampo?: string;
  DescricaoTipo?: string;
  minOccurs?: number;
  maxOccurs?: string | number;

  sequence?: number;
  removeChild?: (sequence: number) => void;
}

export function FieldLabel(props: FieldLabelProps) {
  const [isFieldHelp, setIsFieldHelp] = useState(false);
  const [isTypeHelp, setIsTypeHelp] = useState(false);
  const [fieldDescription, setFieldDescription] = useState<string | undefined>(
    ''
  );
  const [typeDescription, setTypeDescription] = useState<string | undefined>(
    ''
  );

  const delay = 7; // seconds

  function handleFieldHelp(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    setFieldDescription(props.DescricaoCampo);
    showField();
  }

  function handleTypeHelp(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    setTypeDescription(props.DescricaoTipo);
    showType();
  }

  async function showField() {
    if (!isFieldHelp) {
      setIsFieldHelp(true);
      setTimeout(() => setIsFieldHelp(false), delay * 1000);
    } else {
      setIsFieldHelp(false);
      setIsTypeHelp(false);
    }
  }
  async function showType() {
    if (!isTypeHelp) {
      setIsTypeHelp(true);
      setTimeout(() => setIsTypeHelp(false), delay * 1000);
    } else {
      setIsFieldHelp(false);
      setIsTypeHelp(false);
    }
  }

  return (
    <>
      <Label>
        <DescContainer>
          {props.DescricaoCampo && (
            <Button
              type="button"
              onClick={handleFieldHelp}
              title="Informação do campo"
            >
              <Info size={25} />
            </Button>
          )}
          {props.DescricaoTipo && (
            <Button
              type="button"
              onClick={handleTypeHelp}
              title="regra do campo"
            >
              <Ruler size={25} />
            </Button>
          )}
          <Span>{props.NomeCampo} </Span>
          {typeof props.removeChild !== 'undefined' &&
            typeof props.sequence !== 'undefined' && (
              <ButtonX
                type="button"
                onClick={() =>
                  typeof props.removeChild !== 'undefined' &&
                  props.removeChild(
                    typeof props.sequence !== 'undefined' ? props.sequence : 0
                  )
                }
              >
                <XSquare size={25} />
              </ButtonX>
            )}
          <Em isHelp={isFieldHelp}>{fieldDescription}</Em>
          <Em isHelp={isTypeHelp}>{typeDescription}</Em>
        </DescContainer>
      </Label>
    </>
  );
}
