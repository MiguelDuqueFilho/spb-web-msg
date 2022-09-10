import styled from 'styled-components';

interface GroupProps {
  choice: boolean;
}

export const GroupContainer = styled.div<GroupProps>`
  margin: 0.5rem;
  padding: 0.5rem;

  background: ${({ theme }) => theme['gray-700']};
  border-radius: 8px;
  box-shadow: 6px 5px 5px ${({ theme }) => theme.shadow};
  display: flex;
  flex-direction: column;
  gap: 0.1rem;

  // control choice
  display: ${({ choice }) => (choice ? 'normal' : 'none')};
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  clear: both;
  color: ${(props) => props.theme['gray-900']};
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  width: 20px;
  height: 20px;

  :focus {
    box-shadow: none;
  }

  svg {
    color: ${(props) => props.theme['green-300']};
  }
`;

export const Span = styled.span`
  max-width: 50%;
  color: ${({ theme }) => theme['yellow-500']};
  margin: 0.3rem 0.5rem;
`;
