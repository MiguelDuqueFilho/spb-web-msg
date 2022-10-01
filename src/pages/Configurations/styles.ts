import styled from 'styled-components';

export const ConfigurationContainer = styled.main`
  flex: 1;
  padding: 0.5rem 1.5rem;
  margin-top: 0.7rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;

  h1 {
    font-size: 1rem;
    color: ${({ theme }) => theme['gray-100']};
  }
`;

export const ConfigurationContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  width: 100%;
`;

export const ConfigurationUpload = styled.div`
  flex: 1;
  margin: 1rem;
  background: ${({ theme }) => theme['gray-700']};
  border-radius: 8px;
  padding: 1rem;
  width: 100%;

  span {
    display: block;
    font-size: 1rem;
    margin: 0 0.5rem;
    padding: 1rem 2rem;
    border-radius: 8px;
    background: ${({ theme }) => theme['gray-800']};
  }
`;
