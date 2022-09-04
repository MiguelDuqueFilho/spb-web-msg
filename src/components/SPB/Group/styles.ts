import styled from 'styled-components';

export const GroupContainer = styled.div`
  margin: 0.5rem;
  padding: 0.5rem;

  background: ${({ theme }) => theme['gray-700']};
  border-radius: 8px;
  box-shadow: 6px 5px 5px ${({ theme }) => theme.shadow};
  display: flex;
  flex-direction: column;
  gap: 0.1rem;

  > span {
    color: ${({ theme }) => theme['yellow-500']};
    margin: 0.3rem 0.5rem;
  }
`;
