import styled from 'styled-components';

export const Label = styled.label`
  position: relative;
  display: flex;
  min-width: 25%;

  justify-content: flex-start;
  align-items: center;

  color: ${(props) => props.theme['gray-900']};
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  width: 20px;
  height: 20px;
  margin-right: 0.5rem;

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
  isHelp: boolean;
}

export const Em = styled.em<EmProps>`
  display: ${(props) => (props.isHelp ? 'normal' : 'none')};
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
