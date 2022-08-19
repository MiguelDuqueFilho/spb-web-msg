import { ReactNode } from 'react'
import { DOCContainer } from './styles'

interface DocProps {
  children: ReactNode
  name: string
  type: string
  description: string
  InfEvento: {
    Evento?: string
    Descricao?: string
    TipoFluxo?: string
  }
}

export function DOC(props: DocProps) {
  return (
    <DOCContainer description={props.description}>
      <span>{props.InfEvento?.Evento}</span>
      {props.children}
    </DOCContainer>
  )
}
