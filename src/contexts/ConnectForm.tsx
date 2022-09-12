import type { ReactElement } from 'react';
import type { UseFormReturn, FieldValues } from 'react-hook-form';
import { useFormContext } from 'react-hook-form';

interface ConnectFormProps<TFieldvalues extends FieldValues> {
  children(children: UseFormReturn<TFieldvalues>): ReactElement;
}

export const ConnectForm = <TFieldvalues extends FieldValues>({
  children,
}: ConnectFormProps<TFieldvalues>) => {
  const methods = useFormContext<TFieldvalues>();

  return children({ ...methods });
};
