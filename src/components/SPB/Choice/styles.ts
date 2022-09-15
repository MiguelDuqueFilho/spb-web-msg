import styled from 'styled-components';

export const ChoiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.3rem 0.7rem;
  margin: 0.5rem 0;
  border-radius: 8px;
  gap: 1rem;

  @media screen and (max-width: 800px) {
    justify-content: flex-start;
    width: 100%;
  }
`;

export const Label = styled.label`
  color: ${(props) => props.theme['gray-100']};
`;

export const Input = styled.input`
  appearance: none;
  -webkit-appearance: none;
  position: relative;
  height: 20px;
  width: 20px;
  background: transparent;
  /* border-radius: 50%; */
  margin: 0 1rem;
  border: 1px solid ${(props) => props.theme['green-300']};

  &:checked::before {
    content: '';
    position: absolute;
    height: 0.5rem;
    width: 0.3rem;
    border-right: 1.5px solid ${(props) => props.theme['green-300']};
    border-bottom: 1.5px solid ${(props) => props.theme['green-300']};
    top: 0.2rem;
    left: 0.4rem;
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
