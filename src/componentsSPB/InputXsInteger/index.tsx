import { ChangeEvent, MouseEvent, useState } from 'react'
import { Info } from 'phosphor-react'
import { Em, Input, InputXsIntegerContainer, Label, Span, Button } from './styles'

interface InputXsIntegerProps {
  name: string
  fieldName: string
  fieldDescription: string
  values: string
  totalDigits: string
  currentValue: string
  required?: boolean
  changeHandler: (event: ChangeEvent<HTMLInputElement>) => void
}

export function InputXsInteger({
  name,
  fieldName,
  fieldDescription,
  totalDigits,
  currentValue,
  changeHandler,
  required = false,
}: InputXsIntegerProps) {
  const [InputXsInteger, setInputXsInteger] = useState('22')
  const [isFieldHelp, setIsFieldHelp] = useState(false)

  const [isRequired] = useState(required)

  function handleChangeInput(event: ChangeEvent<HTMLInputElement>) {
    setInputXsInteger(event.target.value.replace(/\D/g, ''))
    console.log(`InputXsInteger : ${event.target.name} - ${event.target.value}`)
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
    <InputXsIntegerContainer>
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
        type="text"
        id={name}
        name={name}
        onChange={handleChangeInput}
        required={isRequired}
        pattern={`[0-9]{${totalDigits}}`}
        value={InputXsInteger}
        maxLength={Number(totalDigits)}
        data-xsd-primitive="xs:string"
      />
    </InputXsIntegerContainer>
  )
}

// ;<xs:simpleType name="SitLancSTR">
//   <xs:annotation>
//     <xs:documentation>
//       <cat:InfTipo>
//         <cat:DescricaoTipo>
//           Situa��o de um lan�amento que foi comandado no STR.
//         </cat:DescricaoTipo>
//       </cat:InfTipo>
//     </xs:documentation>
//   </xs:annotation>
//   <xs:restriction base="xs:integer">
//     <xs:totalDigits value="3" />
//   </xs:restriction>
// </xs:simpleType>
