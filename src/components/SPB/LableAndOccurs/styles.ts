import styled from 'styled-components';

export const Label = styled.label`
  position: relative;
  display: flex;
  width: 100%;
  min-height: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  color: ${(props) => props.theme['gray-900']};

  @media screen and (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height: 2rem;
  }
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
  width: 20%;
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

  width: 60%;
  text-align: center;
  margin: 0 30%;
  padding: 0.5rem;

  color: ${(props) => props.theme['yellow-500']};

  border: 1px solid ${(props) => props.theme['yellow-500']};
  background: ${({ theme }) => theme['gray-700']};

  font-style: italic;
  border-radius: 8px;
`;