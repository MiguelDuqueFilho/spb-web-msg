import styled from 'styled-components';

export const Input = styled.input`
  padding: 0 0.7rem;
  background: ${({ theme }) => theme['gray-900']};
  border-radius: 8px;
  width: calc(1.1rem * 16);

  font-family: 'Roboto Mono', monospace;
  font-size: 1rem;
  line-height: 1rem;
  color: ${({ theme }) => theme['gray-100']};

  border: 1px solid ${({ theme }) => theme['gray-400']};

  &::-webkit-calendar-picker-indicator {
    cursor: pointer;
    border-radius: 4px;
    margin-right: 2px;
    filter: invert(0.8) sepia(100%) saturate(10000%) hue-rotate(200deg);
  }

  :focus {
    border: 2px solid ${({ theme }) => theme['green-500']};
  }

  :not(Input[required]) {
    background: ${({ theme }) => theme['gray-500']};
  }

  @media screen and (max-width: 800px) {
    justify-content: flex-start;
    width: 100%;
  }
`;
