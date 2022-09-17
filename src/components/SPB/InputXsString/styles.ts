import styled from 'styled-components';

interface inputProps {
  maxLenght?: number;
}

export const Input = styled.input<inputProps>`
  padding: 0 0.3rem;

  border-radius: 8px;

  width: calc(
    1rem * ${({ maxLenght }) => (maxLenght && maxLenght <= 40 ? maxLenght : 40)}
  );
  min-height: 2rem;

  font-family: 'Roboto Mono', monospace;
  font-size: 0.95rem;

  color: ${({ theme }) => theme['gray-100']};

  border: 1px solid ${({ theme }) => theme['gray-400']};

  :focus {
    border: 2px solid ${({ theme }) => theme['green-500']};
  }

  :not(Input[required]) {
    background: ${({ theme }) => theme['gray-600']};
  }

  @media screen and (max-width: 800px) {
    justify-content: flex-start;
    width: 100%;
  }
`;
