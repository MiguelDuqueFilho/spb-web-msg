import styled from 'styled-components';

export const Input = styled.input`
  padding: 0 0.3rem;
  /* background: ${({ theme }) => theme['gray-900']}; */
  border-radius: 8px;

  width: calc(1rem * 10);
  min-height: 2rem;

  font-family: 'Roboto Mono', monospace;
  font-size: 1rem;

  color: ${({ theme }) => theme['gray-100']};

  border: 1px solid ${({ theme }) => theme['gray-400']};

  input[type='date-local']::-webkit-calendar-picker-indicator {
    /* cursor: pointer;
    border-radius: 4px;
    margin-right: 2px;
    color: rgba(0, 0, 0, 0);
    filter: invert(0.2) sepia(100%) saturate(10000%) hue-rotate(200deg); */
    display: none;
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
