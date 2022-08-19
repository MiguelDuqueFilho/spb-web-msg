import styled from 'styled-components'

export const InputFileContainer = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 1rem;
    margin: 1rem;
    padding-left: 1rem;
  }
`

export const LoadContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`

export const InputFilePdf = styled.input`
  font-size: 1rem;
  background: ${({ theme }) => theme['gray-600']};
  border-radius: 50px;
  width: 37rem;
  outline: none;
  border: none;
  color: ${({ theme }) => theme['gray-100']};

  ::-webkit-file-upload-button {
    color: ${({ theme }) => theme['gray-300']};
    background: ${({ theme }) => theme['green-500']};
    padding: 0.5rem;
    border: none;
    border-radius: 50px;
    outline: none;
    transition: 0.5s;
  }

  ::-webkit-file-upload-button:hover {
    background: ${({ theme }) => theme['green-700']};
  }
`

export const ButtonLoad = styled.button`
  color: ${({ theme }) => theme['gray-300']};
  background: ${({ theme }) => theme['green-500']};
  border-radius: 50px;
  padding: 0.5rem;
  border: none;
  cursor: pointer;

  :hover {
    background: ${({ theme }) => theme['green-700']};
  }
`
