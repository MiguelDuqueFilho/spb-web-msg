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
import uuid from 'react-uuid';

interface ChoiceProps {
  children?: ReactNode;
}

export function Choice({ children }: ChoiceProps) {
  const [keyUuid] = useState(uuid());
  const [selectedChild, setSelectedChild] = useState('');
  const [childs, setChilds] = useState<object>({});

  function radioHandler(event: ChangeEvent<HTMLInputElement>) {
    setSelectedChild(event.target.value);
  }

  useEffect(() => {
    let names: Object = {};
    Children.map(children, (child: ReactNode) => {
      if (isValidElement(child)) {
        names = { ...names, [child.props.name]: child.type };
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
                name={keyUuid}
                checked={selectedChild === keynName}
                onChange={radioHandler}
              />
              <Label htmlFor={keyUuid}>{keynName}</Label>
            </div>
          );
        })}
      </Fieldset>
      {Children.map(children, (child: ReactNode) => {
        if (isValidElement(child)) {
          return cloneElement(child, {
            choice: selectedChild === child.props.name,
          } as Attributes);
        }
      })}
    </ChoiceContainer>
  );
}
