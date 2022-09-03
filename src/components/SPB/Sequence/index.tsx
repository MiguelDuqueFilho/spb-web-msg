import { ReactNode } from 'react';
import { SequenceContainer } from './styles';

interface SequenceProps {
  children?: ReactNode;
}

export function Sequence(props: SequenceProps) {
  return (
    <SequenceContainer>
      <span>Sequence</span>
      {props.children}
    </SequenceContainer>
  );
}
