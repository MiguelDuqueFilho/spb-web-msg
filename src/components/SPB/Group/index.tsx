import { ReactNode, useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { ButtonOccurs } from '../ButtonOccurs';
import { GroupContainer, Label, Span } from './styles';

interface GroupProps {
  children?: ReactNode;
  choice?: boolean;
  name: string;
  type?: string;
  minOccurs?: number;
  maxOccurs?: string | number;
  NomeCampo?: string;
  tagRef?: string;
  childRef?: string;
  xmlStack: string;
}

export function Group(props: GroupProps) {
  const [isChoice, SetIsChoice] = useState(true);
  const xmlStackLocal = props.xmlStack;
  const { unregister } = useFormContext();

  useEffect(() => {
    let choice = true;
    if (props.choice === undefined) {
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
    <GroupContainer choice={isChoice}>
      {isChoice && (
        <>
          <Label htmlFor={props.name}>
            <Span>
              <a tabIndex={-1}>{props.NomeCampo}</a>
            </Span>
          </Label>
          <ButtonOccurs
            name={props.name}
            type={props.type}
            minOccurs={props.minOccurs}
            maxOccurs={props.maxOccurs}
          >
            {props.children}
          </ButtonOccurs>
        </>
      )}
    </GroupContainer>
  );
}
