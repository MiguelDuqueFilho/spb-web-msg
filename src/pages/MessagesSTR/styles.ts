import styled from 'styled-components';

interface ContainerProps {}

export const Container = styled.main<ContainerProps>`
  flex: 1;
  padding: 0.5rem 1.5rem;
  margin-top: 0.7rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
