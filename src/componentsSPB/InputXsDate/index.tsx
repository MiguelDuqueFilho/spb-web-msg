import { ChangeEvent, MouseEvent, useState } from 'react'
import { Info } from 'phosphor-react'
import { Em, Input, InputXsDateContainer, Label, Span, Button } from './styles'

interface InputXsDateProps {
  name: string
  fieldName: string
  fieldDescription: string
  values: string
  currentValue: string
  required?: boolean
  changeHandler: (event: ChangeEvent<HTMLInputElement>) => void
}

export function InputXsDate({
  name,
  fieldName,
  fieldDescription,
  changeHandler,
  required = false,
}: InputXsDateProps) {
  const [InputXsDate, setInputXsDate] = useState('0001-01-01')
  const [isFieldHelp, setIsFieldHelp] = useState(false)

  const [isRequired] = useState(required)

  function handleChangeInput(event: ChangeEvent<HTMLInputElement>) {
    setInputXsDate(event.target.value)
    console.log(`InputXsDate : ${event.target.name} - ${event.target.value}`)
  }

  function handleFieldHelp(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    function expireFieldHelp() {
      setIsFieldHelp(false)
    }
    setTimeout(expireFieldHelp, 4000)
    setIsFieldHelp(true)
  }

  return (
    <InputXsDateContainer>
      <Label htmlFor={name}>
        <Button type="button" onClick={handleFieldHelp}>
          <Info size={16} />
        </Button>
        <Span>
          <a tabIndex={-1}>{fieldName}</a>
        </Span>
        <Em isFieldHelp={isFieldHelp}>{fieldDescription}</Em>
      </Label>
      <Input
        type="date"
        id={name}
        name={name}
        onChange={handleChangeInput}
        required={isRequired}
        pattern="[0-9]{8}"
        value={InputXsDate}
        min={8}
        max={8}
        data-xsd-primitive="xs:string"
      />
    </InputXsDateContainer>
  )
}
// ;<xs:element name="DtVenc" type="xs:date" minOccurs="0">
//   <xs:annotation>
//     <xs:documentation>
//       <cat:InfCampo>
//         <cat:NomeCampo>Data Vencimento</cat:NomeCampo>
//         <cat:DescricaoCampo>Data de Vencimento</cat:DescricaoCampo>
//       </cat:InfCampo>
//     </xs:documentation>
//   </xs:annotation>
// </xs:element>
