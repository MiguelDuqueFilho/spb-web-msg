import styled from 'styled-components';

export const ButtonsGroup = styled.div`
  width: 0%;
  position: relative;
  z-index: 1;
`;

export const Label = styled.label`
  padding: 0 4rem;
  width: 100%;

  align-self: center;
  color: ${(props) => props.theme['yellow-500']};
`;

export const Button = styled.button`
  position: absolute;

  top: 1rem;
  left: 0.7rem;

  background-color: transparent;
  border: none;
  cursor: pointer;

  :focus {
    box-shadow: none;
  }

  :hover {
    opacity: 70%;
  }

  svg {
    color: ${(props) => props.theme['yellow-500']};
  }
`;

export const ButtonOccursChild = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 8px;

  min-height: 3.5rem;
  width: 100%;
  gap: 0.3rem;
 

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    height: 100%;
`;
