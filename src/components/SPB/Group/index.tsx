import { ReactNode, useEffect, useState } from 'react';
import { GroupContainer, Label, Span } from './styles';
import { ButtonOccurs } from '../ButtonOccurs/index';

interface GroupProps {
  children?: ReactNode;
  choice?: boolean;
  name?: string;
  type?: string;
  minOccurs?: number;
  maxOccurs?: string | number;
  NomeCampo?: string;
  tagRef?: string;
  childRef?: string;
}

export function Group(props: GroupProps) {
  const [choiceSet, setChoiceSet] = useState(true);

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
    <GroupContainer choice={choiceSet}>
      {choiceSet && (
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
            NomeCampo={props.NomeCampo}
          >
            {props.children}
          </ButtonOccurs>
        </>
      )}
    </GroupContainer>
  );
}
