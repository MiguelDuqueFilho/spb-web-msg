import styled from 'styled-components';

export const ButtonOccursContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  padding: 1rem 1rem;
  min-height: 3.5rem;

  background: ${(props) => props.theme['gray-500']};
  border-radius: 8px;
  gap: 1rem;
`;

export const ButtonsGroup = styled.div`
  width: 0%;
  position: relative;
`;

export const Label = styled.label`
  padding: 0.3rem 4rem;
  align-self: center;
  width: 100%;
  color: ${(props) => props.theme['yellow-500']};
`;

export const Button = styled.button`
  position: absolute;
  left: 0;
  width: 20px;
  height: 20px;
  margin-left: 0.4rem;

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

export const ButtonOccursChild = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  background: transparent;
  border-radius: 8px;
  /* box-shadow: 6px 5px 5px ${({ theme }) => theme.shadow}; */
  gap: 0.3rem;
`;
