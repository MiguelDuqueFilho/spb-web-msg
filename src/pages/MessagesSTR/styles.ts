import styled from 'styled-components'

interface ContainerProps {}

export const Container = styled.main<ContainerProps>`
  flex: 1;
  padding: 0.5rem 1.5rem;
  margin-top: 0.7rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

// export const DOC = styled.main<DOCProps>`
//   flex: 1;
//   padding: 0.5rem 1.5rem;
//   margin-top: 0.7rem;
//   display: flex;
//   flex-direction: column;
//   gap: 1rem;

//   background: ${({ theme }) => theme['gray-800']};
//   /* border: 1px solid ${({ theme }) => theme['gray-400']}; */

//   border-radius: 8px;

//   ::before {
//     content: ${(props) => `'${props.name}'`};
//     color: ${({ theme }) => theme['yellow-500']};
//   }

//   > span {
//     font-size: 1rem;
//     color: ${({ theme }) => theme['gray-100']};
//     margin: 0.6rem 0;
//   }
// `

interface BcMsgProps {
  name: string
}

export const BCMSG = styled.div<BcMsgProps>`
  background: ${({ theme }) => theme['gray-700']};
  border: 1px solid ${({ theme }) => theme['gray-400']};
  border-radius: 8px;
  padding: 1rem;

  ::before {
    content: ${(props) => `'${props.name}'`};
    color: ${({ theme }) => theme['yellow-500']};
  }
`

interface SisMsgProps {
  name: string
}

export const SISMSG = styled.div<SisMsgProps>`
  background: ${({ theme }) => theme['gray-700']};
  border: 1px solid ${({ theme }) => theme['gray-400']};
  border-radius: 8px;
  padding: 0.5rem;

  ::before {
    content: ${(props) => `'${props.name}'`};
    color: ${({ theme }) => theme['yellow-500']};
  }
`

interface UserMsgProps {
  name: string
}

export const USERMSG = styled.div<UserMsgProps>`
  background: ${({ theme }) => theme['gray-700']};
  border: 1px solid ${({ theme }) => theme['gray-400']};
  border-radius: 8px;
  padding: 1rem;

  ::before {
    content: ${(props) => `'${props.name}'`};
    color: ${({ theme }) => theme['yellow-500']};
  }
`

interface MessageProps {
  name: string
}

export const Message = styled.div<MessageProps>`
  background: ${({ theme }) => theme['gray-700']};
  /* border: 1px solid ${({ theme }) => theme['gray-400']}; */
  border-radius: 8px;
  padding: 0.5rem;

  ::before {
    content: ${(props) => `'${props.name}'`};
    color: ${({ theme }) => theme['yellow-500']};
  }
`
