import styled from 'styled-components';

export const HistoryContainer = styled.div`
  display: flex;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;

  margin: 10px 0;

  width: 100%;

  max-height: 80vh;
  height: 80vh;

  gap: 1.5rem;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }

  h1 {
    font-size: 1rem;
    color: ${({ theme }) => theme['gray-100']};

    @media screen and (max-width: 768px) {
      font-size: 0.6rem;
    }
  }
`;

export const Action = styled.button`
  background-color: ${(props) => props.theme['yellow-500']};
  border: none;
  border-radius: 8px;
  color: ${(props) => props.theme['gray-900']};

  width: 100%;

  cursor: pointer;

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  :hover:enabled {
    opacity: 0.8;
  }

  svg {
    padding-top: 3px;
    width: 20px;
    height: 20px;
    color: ${(props) => props.theme['gray-900']};
  }
`;

export const Span = styled.span`
  color: ${(props) => props.theme['gray-100']};
  font-size: 1.2rem;
  line-height: 1.6rem;
  margin-left: 2rem;
`;

export const SpanCount = styled.span`
  color: ${(props) => props.theme['gray-900']};
  font-size: 0.7rem;
  padding-top: 3px;
  margin-left: 2px;
`;

export const Pre = styled.pre`
  width: 100%;
  border-radius: 8px;
  color: ${({ theme }) => theme['yellow-500']};
  border: 2px solid ${({ theme }) => theme['red-400']};
`;
