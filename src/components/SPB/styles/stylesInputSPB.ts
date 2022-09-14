import styled from 'styled-components';

interface ContainerProps {
  choice: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0.2rem 0;
  padding: 0.4rem;
  height: 100%;
  gap: 1rem;

  color: ${(props) => props.theme['gray-600']};
  background: ${({ theme }) => theme['gray-600']};
  border-radius: 8px;
  font-family: 'Roboto';
  font-size: 1rem;
  // control choice
  display: ${({ choice }) => (choice ? 'normal' : 'none')};

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 0 0.7rem;
  width: 100%;
  gap: 0.5rem;
`;

export const Input = styled.input`
  padding: 0 0.5rem;
  background: ${({ theme }) => theme['gray-900']};
  border-radius: 8px;
  width: calc(1rem * ${(props) => props.max});
  height: 2rem;
  font-family: 'Roboto Mono', monospace;
  font-size: 0.95rem;

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
  padding: 0.5rem 1rem;
  margin: 0.1rem 0;
  background: ${({ theme }) => theme['red-400']};
  border-radius: 8px;
  box-shadow: 10px 5px 5px ${({ theme }) => theme.shadow};
  color: ${({ theme }) => theme.white};
`;
