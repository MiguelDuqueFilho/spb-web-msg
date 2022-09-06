import React, {
  ReactNode,
  Children,
  isValidElement,
  cloneElement,
  useState,
} from 'react';
// import { ChoiceContainer } from './styles';

import { Message } from '../Message';

interface ChoiceProps {
  children?: ReactNode;
}

export function Choice({ children }: ChoiceProps) {
  // let childNames: string[] = [];

  return (
    <>
      <span>Choice</span>
      <span>{childNames}</span>
      {Children.map(children, (child: ReactNode) => {
        if (isValidElement(child) && child.type === Message) {
          // childNames = [...childNames, child.props.name];
          return cloneElement(child, { choice: true });
        }
      })}
    </>
  );
}
