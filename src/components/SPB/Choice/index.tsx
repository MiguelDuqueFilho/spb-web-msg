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

import { ChoiceContainer, Fieldset, Input, Label, Legend } from './styles';

interface ChoiceProps {
  children?: ReactNode;
}

export function Choice({ children }: ChoiceProps) {
  const [selectedChild, setSelectedChild] = useState('');
  const [childs, setChilds] = useState<object>({});

  function radioHandler(event: ChangeEvent<HTMLInputElement>) {
    setSelectedChild(event.target.value);
  }

  useEffect(() => {
    let names: Object = {};
    Children.map(children, (child: ReactNode) => {
      if (isValidElement(child)) {
        if (child.props.tagRef === 'Message') {
          names = { ...names, [child.props.name]: child.type };
        } else {
          names = { ...names, [child.props.NomeCampo]: child.type };
        }
      }
    });
    setSelectedChild(Object.keys(names)[0]);
    setChilds(names);
  }, []);

  return (
    <ChoiceContainer>
      <Fieldset>
        <Legend>Escolha</Legend>
        {Object.keys(childs).map((keynName, index) => {
          return (
            <div key={index}>
              <Input
                type="radio"
                id={keynName}
                value={keynName}
                name={keynName}
                checked={selectedChild === keynName}
                onChange={radioHandler}
              />
              <Label htmlFor={keynName}>{keynName}</Label>
            </div>
          );
        })}
      </Fieldset>
      {Children.map(children, (child: ReactNode) => {
        if (isValidElement(child)) {
          return cloneElement(child, {
            choice:
              child.props.tagRef === 'Message'
                ? selectedChild === child.props.name
                : selectedChild === child.props.NomeCampo,
          } as Attributes);
        }
      })}
    </ChoiceContainer>
  );
}
