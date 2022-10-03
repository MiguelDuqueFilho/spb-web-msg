import styled from 'styled-components';

export const ConfigurationContainer = styled.main`
  display: flex;
  flex-direction: column;

  padding: 0.5rem 0.4rem;
  margin-top: 0.7rem;
  width: 100%;
  height: 69vh;
  gap: 1rem;

  h1 {
    font-size: 1.2rem;
    color: ${({ theme }) => theme['gray-100']};
    @media screen and (max-width: 800px) {
      font-size: 0.6rem;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;

  width: 100%;
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme['yellow-500']};
  font-size: 1.1rem;
  color: ${(props) => props.theme['gray-100']};
  border-radius: 8px;

  width: 10rem;
  height: 1.5rem;
  border: none;
  cursor: pointer;

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  :focus {
    box-shadow: none;
  }
`;

export const Action = styled.button`
  background-color: ${(props) => props.theme['yellow-500']};
  border: none;
  border-radius: 8px;
  color: ${(props) => props.theme['gray-900']};
  width: 100%;
  cursor: pointer;

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  svg {
    padding-top: 3px;
    width: 20px;
    height: 20px;
    color: ${(props) => props.theme['gray-900']};
  }
`;

export const Span = styled.span`
  color: ${(props) => props.theme['gray-900']};
  font-size: 0.7rem;
  margin-left: 2px;
`;
