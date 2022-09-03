import { ReactNode } from 'react';
import { ChoiceContainer } from './styles';

interface ChoiceProps {
  children?: ReactNode;
}

export function Choice(props: ChoiceProps) {
  return (
    <ChoiceContainer>
      <span>Choice</span>
      {props.children}
    </ChoiceContainer>
  );
}
