import styled from 'styled-components';

export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  z-index: 1;
  width: 50%;

  color: ${(props) => props.theme['gray-900']};

  @media screen and (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
  }
`;

export const DescContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  opacity: 0.6;

  :active,
  :hover,
  :focus {
    box-shadow: none;
    opacity: 1;
  }

  svg {
    color: ${(props) => props.theme['green-300']};
  }
`;

export const ButtonInfo = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  opacity: 0.6;

  :active,
  :hover,
  :focus {
    box-shadow: none;
    opacity: 1;
  }

  svg {
    color: ${(props) => props.theme['yellow-500']};
  }
`;

export const Span = styled.span`
  text-align: center;
  color: ${({ theme }) => theme['gray-100']};
`;
