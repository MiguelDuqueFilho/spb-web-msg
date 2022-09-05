import styled from 'styled-components';

export const MessagesEditContainer = styled.main`
  flex: 1;
  padding: 1rem;
  display: flex;
  flex-direction: column;

  /* h1 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme['gray-100']};
  } */
`;

export const Pre = styled.pre`
  width: 100%;
  border-radius: 8px;
  color: ${({ theme }) => theme['gray-100']};
  border: 2px solid ${({ theme }) => theme['green-500']};
`;
