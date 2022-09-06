import styled from 'styled-components';

export const ChoiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Label = styled.label`
  color: ${(props) => props.theme['gray-100']};
`;

export const Input = styled.input`
  appearance: none;
  -webkit-appearance: none;
  position: relative;
  height: 1.25rem;
  width: 1.25rem;
  background: transparent;
  border-radius: 50%;
  margin: 0 1rem;
  border: 2px solid ${(props) => props.theme['yellow-500']};

  &:checked::before {
    content: '';
    position: absolute;
    height: 0.5rem;
    width: 0.35rem;
    border-right: 2px solid ${(props) => props.theme['green-300']};
    border-bottom: 2px solid ${(props) => props.theme['green-300']};
    top: 0.05rem;
    left: 0.295rem;
    right: 0;
    bottom: 0;
    z-index: 10;
    transform: rotate(45deg);
    opacity: 1;
  }
`;

export const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  height: 3.7rem;
  padding: 0.37rem;
  align-items: center;
  border: 1px solid ${(props) => props.theme['yellow-500']};
  border-radius: 8px;
`;

export const Legend = styled.legend`
  padding: 0 1rem;
  color: ${(props) => props.theme['yellow-500']};
`;
