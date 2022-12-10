import styled from 'styled-components';

export const DocContainer = styled.div`
  /* padding: 0.2rem; */
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  background: ${({ theme }) => theme['gray-800']};
  /* border: 1px solid ${({ theme }) => theme['gray-400']}; */
  border-radius: 8px;

  > p {
    color: ${({ theme }) => theme['yellow-500']};
    margin: 0.6rem 0;
  }

  > h4 {
    color: ${({ theme }) => theme['gray-100']};
    margin: 0.6rem 0;
  }

  > span {
    color: ${({ theme }) => theme['yellow-500']};
    margin: 0.8rem 0.5rem;
  }
`;
