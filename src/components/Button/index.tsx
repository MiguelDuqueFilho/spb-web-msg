import { ButtonContainer, ButtonVariant } from './styles'

interface BottonProps {
  variant: ButtonVariant
}

export function Button({ variant, ...otherProps }: BottonProps) {
  return (
    <ButtonContainer variant={variant} {...otherProps}>
      Enviar
    </ButtonContainer>
  )
}
