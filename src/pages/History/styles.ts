import styled from 'styled-components';

export const HistoryContainer = styled.div`
  display: flex;
  flex-direction: row;

  padding: 0 0.4rem;
  margin-top: 0.7rem;

  width: 100%;

  max-height: 80vh;
  height: 80vh;

  gap: 1rem;

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
  color: ${(props) => props.theme['gray-900']};
  font-size: 0.8rem;
  line-height: 1.6rem;
`;

export const SpanCount = styled.span`
  color: ${(props) => props.theme['gray-900']};
  font-size: 0.7rem;
  padding-top: 3px;
  margin-left: 2px;
`;
