import styled from 'styled-components';

export const InputFileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  label {
    font-size: 1.2rem;
    margin: 1.4rem;
    padding-left: 1rem;
    color: ${({ theme }) => theme['yellow-500']};
  }
`;

export const LoadContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  width: 100%;
`;

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
  width: 100%;
  p {
    font-size: 1.2rem;
  }
  span {
    line-height: 0.5rem;
    background-color: ${({ theme }) => theme['gray-600']};
  }
`;

export const InputFilePdf = styled.input`
  font-size: 1rem;
  background: ${({ theme }) => theme['gray-600']};
  color: ${({ theme }) => theme['gray-100']};
  border-radius: 8px;
  outline: none;
  border: none;
  padding: 0.5rem 1rem;
  width: 90%;
  /* height: 5rem; */

  ::-webkit-file-upload-button {
    color: ${({ theme }) => theme['gray-100']};
    background: ${({ theme }) => theme['green-500']};
    padding: 0.7rem 0.7rem;
    margin-right: 1rem;
    border: none;
    border-radius: 50px;
    outline: none;
    transition: 0.2s;
  }

  ::-webkit-file-upload-button:hover {
    background: ${({ theme }) => theme['green-700']};
  }
`;

export const ButtonLoad = styled.button`
  color: ${({ theme }) => theme['gray-900']};
  background: ${({ theme }) => theme['yellow-500']};
  border-radius: 8px;
  padding: 1rem;
  border: none;
  cursor: pointer;

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;
