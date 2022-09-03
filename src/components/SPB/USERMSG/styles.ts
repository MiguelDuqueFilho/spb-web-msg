import styled from 'styled-components';

export const USERMSGContainer = styled.div`
  padding: 0.5rem 1.5rem;
  margin-top: 0.7rem;
  background: ${({ theme }) => theme['gray-500']};
  border: 1px solid ${({ theme }) => theme['gray-400']};
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
