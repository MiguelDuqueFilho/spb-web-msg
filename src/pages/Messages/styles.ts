import styled from 'styled-components';

export const MessageContainer = styled.main`
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

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
  color: ${({ theme }) => theme['gray-100']};
  font-size: 1.125rem;
  /* font-weight: bold; */
  flex-wrap: wrap;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
`;

const BaseInput = styled.input`
  background: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid ${({ theme }) => theme['gray-500']};
  font-weight: bold;
  font-size: 1.125rem;
  padding: 0 0.5rem;
  color: ${({ theme }) => theme['gray-100']};

  &:focus {
    box-shadow: none;
    border-color: ${({ theme }) => theme['green-500']};
  }

  &::placeholder {
    color: ${({ theme }) => theme['gray-500']};
  }
`;

export const MessageInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`;

export const InputSubmit = styled.input`
  width: 100px;
  height: 40px;
  background: transparent;
  border-radius: 8px;
  color: ${({ theme }) => theme['gray-100']};
  border: 2px solid ${({ theme }) => theme['green-500']};
`;

export const Pre = styled.pre`
  width: 100%;
  border-radius: 8px;
  color: ${({ theme }) => theme['gray-100']};
  border: 2px solid ${({ theme }) => theme['green-500']};
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme['yellow-500']};
  font-size: 1.1rem;
  color: ${(props) => props.theme['gray-900']};
  border-radius: 8px;

  width: 10rem;
  height: 1.8rem;
  border: none;
  cursor: pointer;

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  :hover:enabled {
    opacity: 0.8;
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
