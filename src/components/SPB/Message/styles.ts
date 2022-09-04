import styled from 'styled-components';

export const MessageContainer = styled.div`
  padding: 0.7rem 1.5rem 1.5rem 1.5rem;
  /* margin-top: 0.7rem; */
  background: ${({ theme }) => theme['gray-600']};
  border-radius: 8px;
  box-shadow: 6px 5px 5px ${({ theme }) => theme.shadow};
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
`;
