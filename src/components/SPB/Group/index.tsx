import { CheckSquare, MinusCircle, PlusCircle, Square } from 'phosphor-react';
import React, { ReactNode, useEffect, useState } from 'react';

import { Button, GroupContainer, Label, Span } from './styles';
import { toast } from 'react-toastify';
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
  const [occurs, setOccurs] = useState<number>(() => initialSetOccurs());
  const [occursAvailble, setOccursAvailble] = useState<boolean>(() =>
    OccursAvailble()
  );
  const [minOccurs] = useState<number>(() => initialMinOccurs());
  const [maxOccurs] = useState<number>(() => initialMaxOccurs());

  function checkAndSetOccurs(occursNow: number): void {
    if (minOccurs === maxOccurs && occursNow !== minOccurs) {
      setOccurs(minOccurs);
    } else {
      if (occursNow > maxOccurs || occursNow < minOccurs) {
        toast.warn(
          `limites de ocorrencia minimo: ${minOccurs} maximo: ${maxOccurs}`
        );
      } else {
        setOccurs(occursNow);
      }
    }
    // setOccursAvailble(OccursAvailble());
  }

  function initialSetOccurs(): number {
    return initialMinOccurs();
  }

  function OccursAvailble(): boolean {
    if (initialMinOccurs === initialMaxOccurs) {
      return true;
    } else {
      return occurs > 0;
    }
  }

  function initialMinOccurs(): number {
    if (typeof props.minOccurs === 'undefined') {
      return 1;
    } else {
      return props.minOccurs;
    }
  }

  function initialMaxOccurs(): number {
    if (typeof props.maxOccurs === 'undefined') {
      return 1;
    } else {
      if (props.maxOccurs === 'unbounded') {
        return 9999;
      } else {
        return Number(props.maxOccurs);
      }
    }
  }

  function showButtons() {
    let buttonsSquareBox: ReactNode = null;
    let buttonsCheckBox: ReactNode = null;
    if (minOccurs !== maxOccurs) {
      if (minOccurs === 0 && maxOccurs === 1) {
        buttonsSquareBox =
          occurs === 0 ? (
            <Button type="button" onClick={handleAddGroup}>
              <Square size={20} />
            </Button>
          ) : (
            <Button type="button" onClick={handleRemoveGroup}>
              <CheckSquare size={20} />
            </Button>
          );
      } else {
        let buttonsPlus: ReactNode = null;
        let buttonsMinus: ReactNode = null;
        if (occurs > minOccurs) {
          buttonsPlus = (
            <Button type="button" onClick={handleAddGroup}>
              <PlusCircle size={20} />
            </Button>
          );
        }
        if (occurs < maxOccurs) {
          buttonsMinus = (
            <Button type="button" onClick={handleRemoveGroup}>
              <MinusCircle size={20} />
            </Button>
          );
        }
        buttonsCheckBox = `${buttonsPlus}${buttonsMinus}`;
      }
    }

    const buttons = `${buttonsSquareBox}${buttonsCheckBox}`;
    console.log(buttons);
    return buttons;
  }

  function handleAddGroup(event: React.MouseEvent<HTMLButtonElement>) {
    checkAndSetOccurs(occurs + 1);
  }
  function handleRemoveGroup(event: React.MouseEvent<HTMLButtonElement>) {
    checkAndSetOccurs(occurs - 1);
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
