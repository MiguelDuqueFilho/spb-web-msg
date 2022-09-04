import { ReactNode, useState } from 'react';
import { GroupContainer } from './styles';

interface GroupProps {
  children?: ReactNode;
  name?: string;
  type?: string;
  minOccurs?: number;
  maxOccurs?: string | number;
  NomeCampo?: string;
  tagRef?: string;
  childRef?: string;
}

export function Group(props: GroupProps) {
  const [occurs] = useState(props.minOccurs ? props.minOccurs : 1);

  return (
    <GroupContainer>
      <span>{props.NomeCampo}</span>
      {occurs > 0 && props.children}
    </GroupContainer>
  );
}
