import { ChangeEvent, MouseEvent, useState } from 'react'
import { Info } from 'phosphor-react'
import {
  Em,
  Input,
  Container,
  Label,
  Span,
  Button,
  SelectField,
} from './styles'

interface DropDownFieldProps {
  name: string
  fieldName: string
  fieldDescription: string
  values: Array<{ value: string; label: string }>
  currentValue: string
  required?: boolean
  changeHandler: (event: ChangeEvent<HTMLInputElement>) => void
}

export function DropDownField({
  name,
  fieldName,
  fieldDescription,
  values,
  currentValue,
  required,
  changeHandler,
}: DropDownFieldProps) {
  return (
    <SelectField
      // label={name}
      name={fieldName}
      onChange={changeHandler}
      // fieldDescription
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
        )
      })}
    </SelectField>
    // <Container>
    //   <Label htmlFor={name}>
    //     <Button type="button" onClick={handleFieldHelp}>
    //       <Info size={16} />
    //     </Button>
    //     <Span>
    //       <a tabIndex={-1}>{fieldName}</a>
    //     </Span>
    //     <Em isFieldHelp={isFieldHelp}>{fieldDescription}</Em>
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
  )
}

// ;<xs:simpleType name="ISPB">
//   <xs:annotation>
//     <xs:documentation>
//       <cat:InfTipo>
//         <cat:DescricaoTipo>
//           Identificador da IF e C�mara junto ao Banco Central para o Sistema de
//           Pagamentos Brasileiro.
//         </cat:DescricaoTipo>
//       </cat:InfTipo>
//     </xs:documentation>
//   </xs:annotation>
//   <xs:restriction base="xs:string">
//     <xs:minLength value="8" />
//     <xs:maxLength value="8" />
//     <xs:pattern value="[0-9]{8}" />
//   </xs:restriction>
// </xs:simpleType>
