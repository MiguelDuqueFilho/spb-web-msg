import React, {
  ReactNode,
  Children,
  isValidElement,
  cloneElement,
  useState,
  useEffect,
  ChangeEvent,
  Attributes,
} from 'react';
import { Group } from '../Group';
import { Message } from '../Message';
import { Fieldset, Input, Label, Legend } from './styles';

// import { ChoiceContainer } from './styles';

interface ChoiceProps {
  children?: ReactNode;
}

export function Choice({ children }: ChoiceProps) {
  const [selectedChild, setSelectedChild] = useState('BMC0253');
  const [childs, setChilds] = useState<object>({});

  function radioHandler(event: ChangeEvent<HTMLInputElement>) {
    setSelectedChild(event.target.value);
  }

  useEffect(() => {
    let names: Object = {};
    Children.map(children, (child: ReactNode) => {
      if (isValidElement(child) && child.type === Message) {
        names = { ...names, [child.props.name]: child.key };
      }
    });
    setSelectedChild(Object.keys(names)[0]);
    setChilds(names);
  }, []);

  return (
    <>
      <Fieldset>
        <Legend>Escolha</Legend>
        {Object.keys(childs).map((keynName, index) => {
          return (
            <div key={index}>
              <Input
                type="radio"
                id={keynName}
                value={keynName}
                name="choice"
                checked={selectedChild === keynName}
                onChange={radioHandler}
              />
              <Label htmlFor={keynName}>{keynName}</Label>
            </div>
          );
        })}
      </Fieldset>
      {Children.map(children, (child: ReactNode) => {
        if (isValidElement(child) && child.type === Message) {
          return cloneElement(child, {
            choice: selectedChild === child.props.name,
          } as Attributes);
        }
        if (isValidElement(child) && child.type === Group) {
          return cloneElement(child, {
            // choice: selectedChild === child.props.name,
            choice: true,
          } as Attributes);
        }
      })}
    </>
  );
}
