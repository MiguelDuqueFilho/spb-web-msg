import styled from 'styled-components';

interface InputXsDateTimeContainerProps {
  choice: boolean;
}

export const InputXsDateTimeContainer = styled.div<InputXsDateTimeContainerProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.2rem 0;
  padding: 0 0.4rem;
  height: 2rem;
  gap: 1rem;
  color: ${(props) => props.theme['gray-700']};
  /* background: ${({ theme }) => theme['gray-600']}; */
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

export const Label = styled.label`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  clear: both;
  color: ${(props) => props.theme['gray-900']};
`;

export const Input = styled.input`
  padding: 0 0.7rem;
  background: ${({ theme }) => theme['gray-900']};
  border-radius: 8px;
  width: calc(1.1rem * 16);

  font-family: 'Roboto Mono', monospace;
  font-size: 1rem;
  line-height: 1rem;
  color: ${({ theme }) => theme['gray-100']};

  border: 1px solid ${({ theme }) => theme['gray-400']};

  &::-webkit-calendar-picker-indicator {
    cursor: pointer;
    border-radius: 4px;
    margin-right: 2px;
    filter: invert(0.8) sepia(100%) saturate(10000%) hue-rotate(200deg);
  }

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

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  width: 20px;
  height: 20px;

  :focus {
    box-shadow: none;
  }

  svg {
    color: ${(props) => props.theme['green-300']};
  }
`;

export const Span = styled.span`
  max-width: 50%;
  color: ${({ theme }) => theme['gray-100']};
  margin: 0 0.5rem;
`;

interface EmProps {
  isFieldHelp: boolean;
}

export const Em = styled.em<EmProps>`
  display: ${(props) => (props.isFieldHelp ? 'normal' : 'none')};
  position: absolute;
  overflow: none;

  width: 70%;
  text-align: left;
  margin: 0 30%;
  padding: 0.5rem;

  color: ${(props) => props.theme['yellow-500']};
  border: 1px solid ${(props) => props.theme['yellow-500']};
  background: ${({ theme }) => theme['gray-700']};

  font-style: italic;
  border-radius: 8px;
`;
