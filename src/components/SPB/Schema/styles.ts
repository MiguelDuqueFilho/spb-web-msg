import styled from 'styled-components';

export const SchemaContainer = styled.main`
  display: flex;
  flex-direction: column;
  /* background: ${({ theme }) => theme['gray-800']}; */
  /* border: 1px solid ${({ theme }) => theme['gray-400']}; */
  margin: 0.5rem;
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
  font-size: 1.5rem;

  margin: 0 1rem;

  :focus {
    border: none;
  }
`;

interface EmProps {
  isFieldHelp: boolean;
}

export const Em = styled.em<EmProps>`
  display: ${(props) => (props.isFieldHelp ? 'normal' : 'none')};
  position: absolute;
  overflow: none;

  width: 30%;
  text-align: left;
  margin: 0 10%;
  padding: 0.5rem;

  color: ${(props) => props.theme['yellow-500']};
  border: 1px solid ${(props) => props.theme['gray-500']};
  background: ${({ theme }) => theme['gray-600']};

  font-style: italic;
  border-radius: 8px;
`;
