import styled from 'styled-components';

export const MessagesEditContainer = styled.main`
  flex: 1;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

export const InputSubmit = styled.input.attrs({ type: 'submit' })`
  background: ${({ theme }) => theme['yellow-500']};
  color: ${({ theme }) => theme['gray-900']};
  text-transform: uppercase;
  border: none;
  margin-top: 40px;
  padding: 20px;
  font-size: 1rem;
  font-weight: 100;
  display: block;
  appearance: none;
  border-radius: 8px;
  width: 100%;
`;

export const Pre = styled.pre`
  width: 100%;
  border-radius: 8px;
  color: ${({ theme }) => theme['gray-100']};
  border: 2px solid ${({ theme }) => theme['green-500']};
`;
