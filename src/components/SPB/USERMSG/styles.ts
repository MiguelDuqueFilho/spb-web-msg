import styled from 'styled-components';

export const ContainerBase = styled.div`
  background: ${({ theme }) => theme['gray-700']};
  border-radius: 8px;
  box-shadow: 10px 5px 5px ${({ theme }) => theme.shadow};

  width: 100%;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;
