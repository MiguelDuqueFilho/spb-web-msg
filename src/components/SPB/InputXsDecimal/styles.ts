import styled from 'styled-components';
import CurrencyInput, { CurrencyInputProps } from 'react-currency-input-field';

export const ContainerBase = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  min-height: 3.5rem;
  width: 99%;

  background: ${({ theme }) => theme['gray-700']};

  border-radius: 8px;
  box-shadow: 5px 5px 5px ${({ theme }) => theme.shadow};

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 1.5rem;
  margin-left: 1rem;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 1rem 0;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  @media screen and (max-width: 800px) {
    height: 100%;
  }
`;

export const ErrorMsg = styled.p`
  padding: 0.3rem 1rem;
  margin: 0.05rem 0;
  background: ${({ theme }) => theme.error};
  /* opacity: 60%; */
  border-radius: 6px;
  box-shadow: 5px 5px 5px ${({ theme }) => theme.shadow};
  color: ${({ theme }) => theme.white};
  font-size: 0.8rem;

  @media screen and (max-width: 800px) {
    justify-content: flex-start;
    width: 100%;
  }
`;

export const Input = styled(CurrencyInput)<CurrencyInputProps>`
  padding: 0.3rem 0.7rem;
  background: ${({ theme }) => theme['gray-900']};
  border-radius: 8px;
  width: calc(1.1rem * ${(props) => props.maxLength});

  font-family: 'Roboto Mono', monospace;
  font-size: 1rem;
  line-height: 1rem;

  border: 1px solid ${({ theme }) => theme['gray-400']};
  color: ${({ theme }) => theme['gray-100']};

  :focus {
    border: 2px solid ${({ theme }) => theme['green-500']};
    outline: none;
  }

  :not(Input[required]) {
    background: ${({ theme }) => theme['gray-600']};
  }

  @media screen and (max-width: 800px) {
    justify-content: flex-start;
    width: 100%;
  }
`;
