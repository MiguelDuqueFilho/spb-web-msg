import { ChangeEvent, MouseEvent, useState } from 'react';
import { Info } from 'phosphor-react';
import {
  Em,
  Input,
  Container,
  Label,
  Span,
  Button,
  SelectField,
} from './styles';

interface DropDownFieldProps {
  name: string;
  NomeCampo: string;
  DescricaoCampo: string;
  values: Array<{ value: string; label: string }>;
  currentValue: string;
  required?: boolean;
  changeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function DropDownField({
  name,
  NomeCampo,
  DescricaoCampo,
  values,
  currentValue,
  required,
  changeHandler,
}: DropDownFieldProps) {
  return (
    <SelectField
      // label={name}
      name={NomeCampo}
      onChange={changeHandler}
      // DescricaoCampo
      value={currentValue}
      // variant={'outline'}
      // size={'small'}
      // margin={'dense'}
    >
      {values.map((option) => {
        return (
          <option key={option.value} value={option.value}>
            {option.value}
          </option>
        );
      })}
    </SelectField>
    // <Container>
    //   <Label htmlFor={name}>
    //     <Button type="button" onClick={handleFieldHelp}>
    //       <Info size={16} />
    //     </Button>
    //     <Span>
    //       <a tabIndex={-1}>{NomeCampo}</a>
    //     </Span>
    //     <Em isFieldHelp={isFieldHelp}>{DescricaoCampo}</Em>
    //   </Label>
    //   <Input
    //     type="text"
    //     id={name}
    //     name={name}
    //     onChange={handleChangeInput}
    //     required={isRequired}
    //     pattern="[0-9]{8}"
    //     value={ispb}
    //     min={8}
    //     max={8}
    //     data-xsd-primitive="xs:string"
    //  />
    // </Container>
  );
}
