import styled from 'styled-components';

export const SISMSGContainer = styled.section`
  padding: 1.5rem 1.5rem;

  background: ${({ theme }) => theme['gray-700']};
  border-radius: 8px;
  box-shadow: 10px 5px 5px ${({ theme }) => theme.shadow};
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
