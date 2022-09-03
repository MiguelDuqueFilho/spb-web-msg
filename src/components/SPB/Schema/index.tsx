import { ReactNode } from 'react';
import { SchemaContainer } from './styles';

interface SchemaProps {
  children?: ReactNode;
  xmlns?: string;
}

export function Schema(props: SchemaProps) {
  return (
    <SchemaContainer>
      <span>xmlns: {props.xmlns}</span>
      {props.children}
    </SchemaContainer>
  );
}
