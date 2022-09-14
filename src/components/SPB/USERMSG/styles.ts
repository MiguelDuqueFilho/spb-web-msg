import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0.5rem 1.5rem;
  margin-top: 0.7rem;
  background: ${({ theme }) => theme['gray-700']};
  border-radius: 8px;
  box-shadow: 10px 5px 5px ${({ theme }) => theme.shadow};
  gap: 1rem;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.5rem;
`;

export const Input = styled.input`
  padding: 0.4rem 0.7rem;
  background: ${({ theme }) => theme['gray-900']};
  border-radius: 8px;
  width: calc(1rem * ${(props) => props.max});

  font-family: 'Roboto Mono', monospace;
  font-size: 1rem;

  color: ${({ theme }) => theme['gray-100']};

  border: 1px solid ${({ theme }) => theme['gray-400']};

  :focus {
    border: 2px solid ${({ theme }) => theme['green-500']};
  }

  :not(Input[required]) {
    background: ${({ theme }) => theme['gray-600']};
  }

  @media screen and (max-width: 800px) {
    justify-content: flex-start;
    width: 100%;
  }
`;

export const ErrorMsg = styled.p`
  width: 100%;
  padding: 0.5rem 1rem;
  background: ${({ theme }) => theme['red-400']};
  border-radius: 8px;
  box-shadow: 10px 5px 5px ${({ theme }) => theme.shadow};
  color: ${({ theme }) => theme.white};
`;
