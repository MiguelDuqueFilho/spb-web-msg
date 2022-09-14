import styled from 'styled-components';
import CurrencyInput, { CurrencyInputProps } from 'react-currency-input-field';

export const Input = styled(CurrencyInput)<CurrencyInputProps>`
  padding: 0 0.7rem;
  background: ${({ theme }) => theme['gray-900']};
  border-radius: 8px;
  width: calc(1.3rem * ${(props) => props.maxLength});

  font-family: 'Roboto Mono', monospace;
  font-size: 1rem;
  line-height: 1rem;

  color: ${({ theme }) => theme['gray-100']};

  border: 1px solid ${({ theme }) => theme['gray-400']};

  :focus {
    border: 2px solid ${({ theme }) => theme['green-500']};
  }

  :not(Input[required]) {
    background: ${({ theme }) => theme['gray-500']};
  }

  @media screen and (max-width: 800px) {
    justify-content: flex-start;
    width: 100%;
  }
`;
