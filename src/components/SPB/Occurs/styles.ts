import styled from 'styled-components';

export const ButtonsGroup = styled.div`
  width: 0%;
  position: relative;
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

  svg {
    color: ${(props) => props.theme['yellow-500']};
  }
`;

export const ButtonOccursChild = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* background: ${({ theme }) => theme['gray-500']}; */
  border-radius: 8px;
  /* box-shadow: 10px 5px 5px ${({ theme }) => theme.shadow}; */

  min-height: 3.5rem;
  width: 100%;
  gap: 0.2rem;
  padding: 0 .2rem;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    height: 100%;
`;
