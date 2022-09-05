import styled from 'styled-components';

export const BCMSGContainer = styled.section`
  padding: 0.5rem 1.5rem;
  margin-top: 0.3rem;
  background: ${({ theme }) => theme['gray-700']};
  border-radius: 8px;
  box-shadow: 10px 5px 5px ${({ theme }) => theme.shadow};
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
`;
