import styled from 'styled-components'
interface DOCProps {
  description: string
}

export const DOCContainer = styled.main<DOCProps>`
  flex: 1;
  padding: 0.5rem 1.5rem;
  margin-top: 0.7rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  background: ${({ theme }) => theme['gray-800']};
  /* border: 1px solid ${({ theme }) => theme['gray-400']}; */
  font-size: 1rem;
  border-radius: 8px;

  /* ::before {
    content: ${(props) => `'${props.description}'`};
    color: ${({ theme }) => theme['yellow-500']};
  } */

  > span {
    color: ${({ theme }) => theme['gray-100']};
    margin: 0.6rem 0;
  }
`
