import styled from 'styled-components';

export const ButtonOccursContainer = styled.div`
  margin: 0.2rem 0rem;
  padding-left: 0.5rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  /* gap: 1rem; */
`;

export const ButtonsGroup = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  /* justify-content: flex-start; */
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
  margin: 0.5rem 0.5rem 1rem 0.5rem;
  padding: 0.3rem;
  background: ${({ theme }) => theme['gray-500']};
  border-radius: 8px;
  box-shadow: 6px 5px 5px ${({ theme }) => theme.shadow};
  gap: 1rem;
`;
