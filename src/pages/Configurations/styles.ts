import styled from 'styled-components';

export const ConfigurationContainer = styled.main`
  display: flex;

  padding: 0.5rem 0.4rem;
  margin-top: 0.7rem;
  width: 100%;
  gap: 1rem;

  h1 {
    font-size: 1.2rem;
    color: ${({ theme }) => theme['gray-100']};
    @media screen and (max-width: 800px) {
      font-size: 0.6rem;
    }
  }
`;

export const ConfigurationContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  width: 100%;
`;

export const ConfigurationSection = styled.div`
  flex: 1;
  margin: 1.2rem;
  background: ${({ theme }) => theme['gray-700']};
  border-radius: 8px;
  padding: 1rem;
  width: 100%;

  span {
    display: block;
    font-size: 1.2rem;
    margin: 0 0.5rem;
    padding: 1rem 2rem;
    border-radius: 8px;
    background: ${({ theme }) => theme['gray-800']};
    text-overflow: ellipsis;
  }
`;
