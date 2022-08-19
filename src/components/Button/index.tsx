import { ButtonContainer, ButtonVariant } from './styles'

interface BottonProps {
  variant: ButtonVariant
}

export function Button({ variant }: BottonProps) {
  return <ButtonContainer variant={variant}>Enviar</ButtonContainer>
}
