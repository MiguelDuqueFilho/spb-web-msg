import styled, { css } from 'styled-components';

interface ButtonOccursContainerProps {
  maxOccurs: boolean;
}

export const ButtonOccursContainer = styled.div<ButtonOccursContainerProps>`
  margin: 0.2rem 0rem;
  padding-left: 0.5rem;
  display: flex;
  ${({ maxOccurs }) =>
    maxOccurs
      ? css`
          flex-direction: column;
        `
      : css`
          flex-direction: row;
        `};
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme['gray-500']};
  border-radius: 8px;
  width: 100%;
  min-height: 3.5rem;
  gap: 1rem;
`;

export const ButtonsGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  width: 20px;
  height: 20px;
  margin-left: 1rem;

  :focus {
    box-shadow: none;
  }

  svg {
    color: ${(props) => props.theme['green-300']};
  }
`;

export const ButtonOccursChild = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  width: 100%;
  background: transparent;
  border-radius: 8px;
  /* box-shadow: 6px 5px 5px ${({ theme }) => theme.shadow}; */
  gap: 0.3rem;
`;
