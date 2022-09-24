import { XSquare } from 'phosphor-react';
import { ReactNode, useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';

import { Button, Span } from './styles';

interface GroupProps {
  children: ReactNode;
  choice?: boolean;
  name: string;
  type?: string;
  minOccurs?: number;
  maxOccurs?: string | number;
  NomeCampo: string;
  tagRef?: string;
  childRef?: string;
  xmlStack: string;
  sequence: number;
  removeChild: (sequence: number) => void;
}

export function Group(props: GroupProps) {
  const [isChoice, SetIsChoice] = useState(true);
  const xmlStackLocal = props.xmlStack;
  const { unregister } = useFormContext();

  useEffect(() => {
    let choice = true;
    if (typeof props.choice === 'undefined') {
      choice = true;
    } else {
      choice = !!props.choice;
      if (!props.choice) {
        unregister(xmlStackLocal);
      }
    }
    SetIsChoice(choice);
  }, [props.choice, unregister, xmlStackLocal]);

  return (
    isChoice && (
      <>
        <Span>
          <a tabIndex={-1}>{props.NomeCampo}</a>
        </Span>
        {typeof props.removeChild !== 'undefined' &&
          typeof props.sequence !== 'undefined' && (
            <Button
              type="button"
              onClick={() => props.removeChild(props.sequence)}
            >
              <XSquare size={25} />
            </Button>
          )}
        {props.children}
      </>
    )
  );
}
