import { MouseEvent, useState } from 'react';
import { Info, Ruler } from 'phosphor-react';
import { Em, Label, Span, Button } from './styles';

interface LableAndHelpXsProps {
  name: string;
  NomeCampo: string;
  DescricaoCampo?: string;
  DescricaoTipo?: string;
}

const delay = 7; // seconds

export function LableAndHelpXs(props: LableAndHelpXsProps) {
  const [isFieldHelp, setIsFieldHelp] = useState(false);
  const [isTypeHelp, setIsTypeHelp] = useState(false);
  const [fieldDescription, setFieldDescription] = useState<string | undefined>(
    ''
  );
  const [typeDescription, setTypeDescription] = useState<string | undefined>(
    ''
  );

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
    }
  }
  async function showType() {
    if (!isTypeHelp) {
      setIsTypeHelp(true);
      setTimeout(() => setIsTypeHelp(false), delay * 1000);
    } else {
      setIsTypeHelp(false);
    }
  }

  return (
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
        <Button type="button" onClick={handleTypeHelp} title="regra do campo">
          <Ruler size={20} />
        </Button>
      )}
      <Span>
        <a tabIndex={-1}>{props.NomeCampo}</a>
      </Span>
      <Em isHelp={isFieldHelp}>{fieldDescription}</Em>
      <Em isHelp={isTypeHelp}>{typeDescription}</Em>
    </Label>
  );
}
