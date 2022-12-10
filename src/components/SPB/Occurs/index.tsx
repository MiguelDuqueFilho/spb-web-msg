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

import { Button, ButtonOccursChild, ButtonsGroup, Label } from './styles';

interface OccursProps {
  children: ReactNode;
  name: string;
  NomeCampo?: string;
  xmlStack: string;
  minOccurs: number | undefined;
  maxOccurs: string | number | undefined;
}

interface IChild {
  sequence: number;
  xmlStack: string;
  active: boolean;
}

export function Occurs(props: OccursProps) {
  const arrayChildren = Children.toArray(props.children);
  const [childs, setChilds] = useState<IChild[]>(initialChilds());

  const [occurs, setOccurs] = useState<number>(() => initialSetOccurs());

  const [minOccurs] = useState<number>(() => initialMinOccurs());
  const [maxOccurs] = useState<number>(() => initialMaxOccurs());
  const { unregister } = useFormContext();

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
            removeChild,
          },
          child.props.children &&
            applyRecursiveProps([child.props.children], nodeStack, sequence)
        );
      } else {
        if (child !== null) {
          return applyRecursiveProps(child as Array<any>, nodeStack, sequence);
        } else {
          return child;
        }
      }
    });
  };

  function initialChilds(): IChild[] {
    const minChilds =
      typeof props.minOccurs === 'undefined' ? 1 : props.minOccurs;
    const initChild = [...Array(minChilds)].map((item, index) => {
      return {
        sequence: index,
        xmlStack: props.xmlStack.replace(props.name, `.${index}.${props.name}`),
        active: true,
      };
    });

    return initChild;
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
        return 9999999;
      } else {
        return Number(props.maxOccurs);
      }
    }
  }

  function handlePlus(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    addChild();
  }

  const childOccurs = (childs: IChild[]) =>
    childs.map(
      (child, index) =>
        child.active && applyRecursiveProps(arrayChildren, props.name, index)
    );

  return (
    <>
      <ButtonsGroup>
        {maxOccurs === 1 && occurs === 0 && (
          <Button type="button" onClick={handlePlus}>
            <Square size={25} weight="light" />
          </Button>
        )}
        {maxOccurs > 1 && occurs < maxOccurs && (
          <Button type="button" onClick={handlePlus}>
            <PlusCircle size={25} />
          </Button>
        )}
      </ButtonsGroup>
      <ButtonOccursChild>
        {occurs === 0 && <Label tabIndex={-1}>{props.NomeCampo}</Label>}
        {typeof props.minOccurs === 'undefined' &&
        typeof props.maxOccurs === 'undefined'
          ? props.children
          : childOccurs(childs)}
      </ButtonOccursChild>
    </>
  );
}
