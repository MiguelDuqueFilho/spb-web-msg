import styled from 'styled-components';

interface MessageContainerProps {
  choice: boolean;
}
export const MessageContainer = styled.div<MessageContainerProps>`
  padding: 0.7rem 0.3rem 1.5rem 0.3rem;
  /* margin-top: 0.7rem; */
  background: ${({ theme }) => theme['gray-600']};
  border-radius: 8px;
  box-shadow: 5px 5px 5px ${({ theme }) => theme.shadow};
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  // control choice
  display: ${({ choice }) => (choice ? 'normal' : 'none')};
`;

export const Span = styled.span`
  max-width: 90%;
  color: ${({ theme }) => theme['yellow-500']};
  margin: 0.3rem 0.5rem;
`;
