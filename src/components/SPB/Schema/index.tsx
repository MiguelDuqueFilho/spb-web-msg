import { ReactNode, MouseEvent, useState } from 'react';
import { Button, Em, SchemaContainer, Span } from './styles';
import { Info } from 'phosphor-react';

interface SchemaProps {
  children?: ReactNode;
  xmlns?: string;
}

const delay = 5; // seconds

export function Schema(props: SchemaProps) {
  const [isFieldHelp, setIsFieldHelp] = useState(false);

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
    <SchemaContainer>
      <div>
        <Button type="button" onClick={handleFieldHelp}>
          <Info size={20} />
        </Button>
        <Span>schema</Span>
      </div>
      <Em isFieldHelp={isFieldHelp}>{props.xmlns}</Em>
      {props.children}
    </SchemaContainer>
  );
}
