import React, {
  Children,
  cloneElement,
  isValidElement,
  ReactNode,
  useState,
} from 'react';
import { useFormContext } from 'react-hook-form';
import { toast } from 'react-toastify';

import { PlusCircle, Square } from 'phosphor-react';

import {
  Button,
  ButtonOccursChild,
  ButtonOccursContainer,
  ButtonsGroup,
  Span,
} from './styles';

interface OccursProps {
  children: ReactNode;
  name: string;
  xmlStack: string;
  type?: string;
  minOccurs?: number;
  maxOccurs?: string | number;
}

interface IChild {
  sequence: number;
  xmlStack: string;
  active: boolean;
}

export function Occurs(props: OccursProps) {
  const arrayChildren = Children.toArray(props.children);

  const [occurs, setOccurs] = useState<number>(() => initialSetOccurs());

  const [minOccurs] = useState<number>(() => initialMinOccurs());
  const [maxOccurs] = useState<number>(() => initialMaxOccurs());
  const { unregister } = useFormContext();
  const [childs, setChilds] = useState<IChild[]>([]);

  const addChild = () => {
    const childsNew = childs;
    const countChilds = childsNew.filter(
      (child) => child.active === true
    ).length;
    if (countChilds < maxOccurs) {
      setOccurs(occurs + 1);
      childsNew.push({
        sequence: childs.length,
        xmlStack: props.xmlStack.replace(
          props.name,
          `.${childs.length}.${props.name}`
        ),
        active: true,
      });
    } else {
      toast.warn(`limites de ocorrencia maximo atingido: ${maxOccurs}`);
    }

    setChilds(childsNew);
  };

  function removeChild(sequence: number) {
    const countChilds = childs.filter((child) => child.active === true).length;
    if (countChilds > minOccurs) {
      setOccurs(occurs - 1);
      const inactiveChild = childs.map((childItem, index) => {
        if (childItem.sequence === sequence) {
          childItem.active = false;
          unregister(childItem.xmlStack);
        }
        return childItem;
      });
      setChilds(inactiveChild);
    } else {
      toast.warn(`limites de ocorrencia minimo atingido: ${minOccurs}`);
    }
  }

  const applyRecursiveProps = (
    children: ReactNode[],
    nodeStack: string,
    sequence: number
  ): any => {
    return children.map((child, index: number) => {
      if (isValidElement(child)) {
        return cloneElement(
          child,
          {
            ...child.props,
            key: child.props.xmlStack.replace(
              nodeStack,
              `.${sequence}.${nodeStack}`
            ),
            sequence,
            xmlStack: child.props.xmlStack.replace(
              nodeStack,
              `.${sequence}.${nodeStack}`
            ),
            NomeCampo: `${child.props.NomeCampo}${
              sequence !== 0 ? ' (' + (sequence + 1) + ')' : ''
            }`,
            removeChild,
          },
          child.props.children &&
            applyRecursiveProps([child.props.children], nodeStack, sequence)
        );
      } else {
        return applyRecursiveProps(child as Array<any>, nodeStack, sequence);
      }
    });
  };

  function initialSetOccurs(): number {
    const localOccurs = initialMinOccurs();
    [...Array(localOccurs)].map((item) => addChild());
    return localOccurs;
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
        return 9999999;
      } else {
        return Number(props.maxOccurs);
      }
    }
  }

  function handlePlusGroup(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    addChild();
  }

  const field = (childs: IChild[]) =>
    childs.map(
      (child, index) =>
        child.active && applyRecursiveProps(arrayChildren, props.name, index)
    );

  return (
    <>
      <Span>Occurs</Span>
      <ButtonOccursContainer maxOccurs={maxOccurs > 1}>
        <ButtonsGroup>
          {maxOccurs === 1 && occurs === 0 && (
            <Button type="button" onClick={handlePlusGroup}>
              <Square size={25} weight="light" />
            </Button>
          )}
          {maxOccurs > 1 && occurs < maxOccurs && (
            <Button type="button" onClick={handlePlusGroup}>
              <PlusCircle size={25} />
            </Button>
          )}
        </ButtonsGroup>
        <ButtonOccursChild>
          {minOccurs === 1 && maxOccurs === 1 ? props.children : field(childs)}
        </ButtonOccursChild>
      </ButtonOccursContainer>
    </>
  );
}
