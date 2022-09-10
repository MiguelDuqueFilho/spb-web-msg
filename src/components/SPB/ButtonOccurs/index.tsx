import { CheckSquare, MinusCircle, PlusCircle, Square } from 'phosphor-react';
import React, { ReactNode, useState } from 'react';

import { Button, ButtonOccursChild, ButtonOccursContainer } from './styles';
import { toast } from 'react-toastify';
import _default from 'react-hook-form/dist/logic/appendErrors';
import uuid from 'react-uuid';

interface ButtonOccursProps {
  children: ReactNode;
  name?: string;
  type?: string;
  minOccurs?: number;
  maxOccurs?: string | number;
  NomeCampo?: string;
}

export function ButtonOccurs(props: ButtonOccursProps) {
  const [occurs, setOccurs] = useState<number>(() => initialSetOccurs());
  const [minOccurs] = useState<number>(() => initialMinOccurs());
  const [maxOccurs] = useState<number>(() => initialMaxOccurs());
  // const [maxOccurs] = useState<number>(3);

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
  }

  function initialSetOccurs(): number {
    return initialMinOccurs();
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

  function handleShowGroup(event: React.MouseEvent<HTMLButtonElement>) {
    checkAndSetOccurs(1);
  }
  function handleRemoveGroup(event: React.MouseEvent<HTMLButtonElement>) {
    checkAndSetOccurs(0);
  }
  function handlePlusGroup(event: React.MouseEvent<HTMLButtonElement>) {
    checkAndSetOccurs(occurs + 1);
  }
  function handleMinusGroup(event: React.MouseEvent<HTMLButtonElement>) {
    checkAndSetOccurs(occurs - 1);
  }

  const Field = ({ id }: { id: number }) => (
    <ButtonOccursChild>{props.children}</ButtonOccursChild>
  );

  return (
    <ButtonOccursContainer>
      {maxOccurs === 1 && occurs === 0 ? (
        <Button type="button" onClick={handleShowGroup}>
          <Square size={25} weight="light" />
        </Button>
      ) : (
        maxOccurs === 1 && (
          <Button type="button" onClick={handleRemoveGroup}>
            <CheckSquare size={25} />
          </Button>
        )
      )}
      {maxOccurs > 1 && occurs >= minOccurs && (
        <Button type="button" onClick={handlePlusGroup}>
          <PlusCircle size={25} />
        </Button>
      )}
      {maxOccurs > 1 && occurs <= maxOccurs && (
        <Button type="button" onClick={handleMinusGroup}>
          <MinusCircle size={25} weight="light" />
        </Button>
      )}
      {[...Array(occurs)].map((value: undefined, index: number) => (
        <Field id={index + 1} key={uuid()} />
      ))}
    </ButtonOccursContainer>
  );
}
