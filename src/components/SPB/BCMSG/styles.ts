import styled from 'styled-components';

export const BCMSGContainer = styled.section`
  display: flex;
  flex-direction: column;

  padding: 0.3rem 0.5rem;
  background: ${({ theme }) => theme['gray-700']};
  border-radius: 8px;
  box-shadow: 5px 5px 5px ${({ theme }) => theme.shadow};
  gap: 0.3rem;
`;
