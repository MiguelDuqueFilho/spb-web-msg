import styled from 'styled-components';

export const SchemaContainer = styled.main`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme['gray-800']};
  border: 1px solid ${({ theme }) => theme['gray-400']};
  border-radius: 8px;
`;
