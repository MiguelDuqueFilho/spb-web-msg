import styled from 'styled-components';

export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;

  /* background-color: green; */
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

  :focus {
    box-shadow: none;
  }

  svg {
    color: ${(props) => props.theme['green-300']};
  }
`;

export const ButtonX = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;

  :focus {
    box-shadow: none;
  }

  svg {
    color: ${(props) => props.theme['yellow-500']};
  }
`;

export const Span = styled.span`
  text-align: center;
  color: ${({ theme }) => theme['gray-100']};
`;

interface EmProps {
  isHelp: boolean;
}

export const Em = styled.em<EmProps>`
  display: ${(props) => (props.isHelp ? 'normal' : 'none')};
  position: absolute;
  overflow: none;

  text-align: center;
  left: 20rem;
  margin: 0 10%;
  padding: 0.5rem;

  color: ${(props) => props.theme['yellow-500']};

  border: 1px solid ${(props) => props.theme['yellow-500']};
  background: ${({ theme }) => theme['gray-700']};

  font-style: italic;
  border-radius: 8px;

  z-index: 10;

  @media screen and (max-width: 800px) {
    text-align: center;
    margin: 1.2rem 0;
    padding: 0.5rem;
    left: 30%;
    top: 0;
  }
`;
