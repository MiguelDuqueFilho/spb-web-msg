import styled from 'styled-components'

export const ConfigurationContainer = styled.main`
  flex: 1;
  padding: 1.5rem;

  display: flex;
  flex-direction: column;

  h1 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme['gray-100']};
  }
`

export const ConfigurationContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`

export const ConfigurationUpload = styled.div`
  margin: 1rem;
  background: ${({ theme }) => theme['gray-700']};
  border-radius: 8px;
  padding: 1rem;

  span {
    display: block;
    font-size: 1.2rem;
    margin: 0 1rem;
    padding: 1rem 2rem;
    border-radius: 8px;
    background: ${({ theme }) => theme['gray-800']};
  }
`
