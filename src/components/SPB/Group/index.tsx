import { XSquare } from 'phosphor-react';
import { ReactNode, useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { Occurs } from '../Occurs';

import { ButtonClose, Container, Label, Sequence } from './styles';

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
}
interface GroupChildProps {
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
  sequence?: number;
  removeChild?: (sequence: number) => void;
}

function GroupChild(props: GroupChildProps) {
  return (
    <>
      <Sequence>
        <Label tabIndex={-1}>{props.NomeCampo}</Label>
        {typeof props.removeChild !== 'undefined' &&
          typeof props.sequence !== 'undefined' && (
            <ButtonClose
              type="button"
              onClick={() =>
                typeof props.removeChild !== 'undefined' &&
                props.removeChild(
                  typeof props.sequence !== 'undefined' ? props.sequence : 0
                )
              }
            >
              <XSquare size={25} />
            </ButtonClose>
          )}
      </Sequence>
      {props.children}
    </>
  );
}

export function Group(props: GroupProps) {
  const [isChoice, SetIsChoice] = useState(true);
  const { unregister } = useFormContext();

  useEffect(() => {
    let choice = true;
    if (typeof props.choice === 'undefined') {
      choice = true;
    } else {
      choice = !!props.choice;
      if (!props.choice) {
        unregister(props.xmlStack);
      }
    }
    SetIsChoice(choice);
  }, [props.choice, props.xmlStack, unregister]);

  return (
    <Container>
      {isChoice && (
        <>
          <Occurs
            name={props.name}
            NomeCampo={props.NomeCampo}
            xmlStack={props.xmlStack}
            minOccurs={props.minOccurs}
            maxOccurs={props.maxOccurs}
          >
            <GroupChild {...props}>{props.children}</GroupChild>
          </Occurs>
        </>
      )}
    </Container>
  );
}
