import { MinusCircle, PlusCircle } from 'phosphor-react';
import React, { ReactNode, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Button, GroupContainer, Label, Span } from './styles';

interface GroupProps {
  children?: ReactNode;
  name?: string;
  type?: string;
  minOccurs?: number;
  maxOccurs?: string | number;
  NomeCampo?: string;
  tagRef?: string;
  childRef?: string;
}

export function Group(props: GroupProps) {
  const [occurs, setOccurs] = useState(props.minOccurs ? props.minOccurs : 0);
  const [minOccurs] = useState(() => checkMinOccurs());
  const [maxOccurs] = useState(() => checkMaxOccurs());

  function checkAndSetOccurs(occursNow: number): boolean {
    const occurs: number = occursNow;
    if (minOccurs === maxOccurs) {
      if (occurs !== minOccurs) {
        return false;
      } else {
        setOccurs(occurs);
        return true;
      }
    } else {
      if (occurs > maxOccurs || occurs < minOccurs) {
        return false;
      } else {
        setOccurs(occurs);
        return true;
      }
    }
  }

  function checkMinOccurs() {
    if (props.minOccurs) {
      return props.minOccurs;
    } else {
      return 1;
    }
  }

  function checkMaxOccurs() {
    if (props.maxOccurs) {
      if (props.maxOccurs === 'unbounded') {
        return 9999;
      } else {
        return props.maxOccurs;
      }
    } else {
      return 1;
    }
  }

  function handleShowGroup(event: React.MouseEvent<HTMLButtonElement>) {
    checkAndSetOccurs(1);
  }

  return (
    <GroupContainer>
      <Label htmlFor={props.name}>
        <Span>
          <a tabIndex={-1}>{props.NomeCampo}</a>
        </Span>
        <Button type="button" onClick={handleShowGroup}>
          {occurs < maxOccurs ? (
            <PlusCircle size={20} />
          ) : (
            <MinusCircle size={20} />
          )}
        </Button>
      </Label>

      {occurs > 0 && props.children}
    </GroupContainer>
  );
}
