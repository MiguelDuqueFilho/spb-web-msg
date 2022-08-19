import { ButtonContainer, ButtonVariant } from './styles'

interface BottonProps {
  variant: ButtonVariant
  type: string
}

export function Button({ variant }: BottonProps) {
  return <ButtonContainer variant={variant}>Enviar</ButtonContainer>
}
