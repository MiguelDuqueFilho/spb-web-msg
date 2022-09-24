import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 1.5rem;
  margin-top: 0.7rem;
  background: ${({ theme }) => theme['gray-700']};
  border-radius: 8px;
  box-shadow: 10px 5px 5px ${({ theme }) => theme.shadow};

  @media screen and (max-width: 800px) {
    justify-content: flex-start;
    width: 100%;
  }
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  clear: both;
  color: ${(props) => props.theme['gray-900']};
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  width: 20px;
  height: 20px;
  margin-left: 1rem;

  :focus {
    box-shadow: none;
  }

  svg {
    color: ${(props) => props.theme['green-300']};
  }
`;

export const Span = styled.span`
  max-width: 50%;
  color: ${({ theme }) => theme['yellow-500']};
  margin: 0.3rem 0.5rem;
`;
