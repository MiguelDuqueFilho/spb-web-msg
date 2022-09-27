import styled from 'styled-components';

export const ContainerBase = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  min-height: 3.5rem;
  width: 100%;

  background: ${({ theme }) => theme['gray-700']};

  border-radius: 8px;
  box-shadow: 10px 5px 5px ${({ theme }) => theme.shadow};

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;

//* ******** input String ***************** */

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 1.5rem;
  margin-left: 1.5rem;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 1rem 0;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  @media screen and (max-width: 800px) {
    height: 100%;
  }
`;

interface inputProps {
  width?: number;
}

export const Input = styled.input<inputProps>`
  padding: 0 0.7rem;
  border: 1px solid ${({ theme }) => theme['gray-400']};
  border-radius: 8px;
  width: calc(1rem * ${({ width }) => (width && width <= 80 ? width : 80)});
  max-width: 100%;

  min-height: 2rem;

  color: ${({ theme }) => theme['gray-100']};

  font-family: 'Roboto Mono', monospace;
  font-size: 0.95rem;

  :focus {
    border: 2px solid ${({ theme }) => theme['green-500']};
    outline: none;
  }

  :not(Input[required]) {
    background: ${({ theme }) => theme['gray-600']};
  }

  @media screen and (max-width: 800px) {
    justify-content: flex-start;
    width: 100%;
  }
`;

export const ErrorMsg = styled.p`
  padding: 0.3rem 1rem;
  margin: 0.05rem 0;
  background: ${({ theme }) => theme.error};
  /* opacity: 60%; */
  border-radius: 6px;
  box-shadow: 10px 5px 5px ${({ theme }) => theme.shadow};
  color: ${({ theme }) => theme.white};
  font-size: 0.8rem;

  @media screen and (max-width: 800px) {
    justify-content: flex-start;
    width: 100%;
  }
`;

//* ******** Label and button ***************** */

export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;

  /* background-color: green; */
  width: 40%;

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
