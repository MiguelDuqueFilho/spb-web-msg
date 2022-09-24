import { ErrorMessage } from '@hookform/error-message';
import { memo } from 'react';
import { FieldValues, UseFormReturn } from 'react-hook-form';
import { ErrorMsg, Input } from './styles';

// eslint-disable-next-line react/display-name
export const NestedInput = memo(
  (
    { register, formState: { errors } }: UseFormReturn<FieldValues, any>,
    props
  ) => (
    <>
      <Input
        type="text"
        // readOnly={isReadyOnly}
        // width={props.maxLength && props.maxLength}
        {...register(props.xmlStack, {
          shouldUnregister: true,
          value: props.fixed ? props.fixed : '',
          // required: `${props.NomeCampo} é obrigatório`,
          // minLength: {
          //   value: props.minLength ? props.minLength : 0,
          //   message: `${props.NomeCampo} tamanho mínimo de ${props.minLength} caracteres`,
          // },
          // maxLength: {
          //   value: props.maxLength
          //     ? props.maxLength
          //     : props.minLength
          //     ? props.minLength
          //     : 1,
          //   message: `${props.NomeCampo} tamanho maximo de ${props.maxLength} caracteres`,
          // },
          // pattern: {
          //   value: props.pattern ? RegExp(props.pattern) : /[\s\S]/,
          //   message: `${props.NomeCampo} deve respeitar o formato do campo.`,
          // },
        })}
      />
      <ErrorMessage
        errors={errors}
        name={props.xmlStack}
        render={({ message }) => message && <ErrorMsg>{message}</ErrorMsg>}
      />
    </>
  ),
  (prevProps, nextProps) =>
    prevProps.formState.isDirty === nextProps.formState.isDirty
);
