import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 98vw;
  min-height: 96vh;

  margin: 1rem auto;
  padding: 2.5rem;

  background-color: ${({ theme }) => theme['gray-800']};
  border-radius: 8px;

  display: flex;
  flex-direction: column;
`
