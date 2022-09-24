import { CheckSquare, MinusCircle, PlusCircle, Square } from 'phosphor-react';
import React, { ReactNode, useEffect, useState } from 'react';

import {
  Button,
  ButtonOccursChild,
  ButtonOccursContainer,
  ButtonsGroup,
} from './styles';
import { toast } from 'react-toastify';
import { useFormContext } from 'react-hook-form';

interface ButtonOccursProps {
  children: ReactNode;
  name: string;
  xmlStack: string;
  type?: string;
  minOccurs?: number;
  maxOccurs?: string | number;
}

export function ButtonOccurs(props: ButtonOccursProps) {
  const [occurs, setOccurs] = useState<number>(() => initialSetOccurs());
  const [minOccurs] = useState<number>(() => initialMinOccurs());
  const [maxOccurs] = useState<number>(() => initialMaxOccurs());
  const { unregister } = useFormContext();

  useEffect(() => {
    if (occurs === 0) {
      unregister(props.xmlStack);
    }
  }, [occurs, props.xmlStack, unregister]);

  function checkAndSetOccurs(occursNow: number): void {
    if (minOccurs === maxOccurs && occursNow !== minOccurs) {
      setOccurs(minOccurs);
    } else {
      if (occursNow > maxOccurs || occursNow < minOccurs) {
        toast.warn(
          `limites de ocorrencia minimo: ${minOccurs} ${
            props.maxOccurs !== 'unbounded' ? `maximo: ${maxOccurs}` : ''
          } `
        );
      } else {
        setOccurs(occursNow);
      }
    }
  }

  function isOccrus(): boolean {
    if (
      typeof props.maxOccurs === 'undefined' &&
      typeof props.minOccurs === 'undefined'
    ) {
      return false;
    } else {
      return true;
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
      if (typeof props.minOccurs === 'undefined') {
        return 0;
      } else {
        return 1;
      }
    } else {
      if (props.maxOccurs === 'unbounded') {
        return 9999999;
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
    // unregister(props.xmlStack);
  }
  function handlePlusGroup(event: React.MouseEvent<HTMLButtonElement>) {
    checkAndSetOccurs(occurs + 1);
  }
  function handleMinusGroup(event: React.MouseEvent<HTMLButtonElement>) {
    checkAndSetOccurs(occurs - 1);
  }

  const Field = ({ id }: { id: number }) => (
    <ButtonOccursChild>{occurs > 0 && props.children}</ButtonOccursChild>
  );

  return isOccrus() ? (
    <ButtonOccursContainer maxOccurs={maxOccurs > 1}>
      <ButtonsGroup>
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
      </ButtonsGroup>
      {[...Array(occurs)].map((value: undefined, index: number) => (
        <Field id={index + 1} key={index} />
      ))}
    </ButtonOccursContainer>
  ) : (
    <ButtonOccursChild>{occurs > 0 && props.children}</ButtonOccursChild>
  );
}
