import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 0.3rem;
  margin-bottom: 0.4rem;
  padding: 0.5rem 0.2rem;

  width: 100%;

  background: ${({ theme }) => theme['gray-450']};
  border-radius: 8px;
  box-shadow: 5px 4px 4px ${({ theme }) => theme.shadow};

  @media screen and (max-width: 800px) {
    justify-content: flex-start;
    width: 100%;
  }
`;

export const GroupChildContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px dashed ${({ theme }) => theme['yellow-500']};
  border-radius: 10px;
  gap: 0.2rem;
  padding-bottom: 1rem;
  width: 100%;
`;

export const Sequence = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 0 4rem;

  color: ${(props) => props.theme['yellow-500']};
  gap: 1rem;
`;

export const Label = styled.label`
  padding-top: 1.2rem;
  padding-bottom: 0.3rem;
  padding-left: 3rem;
  width: 40%;
  color: ${(props) => props.theme['yellow-500']};
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  padding-top: 1.4rem;

  cursor: pointer;

  margin-left: 1rem;
  opacity: 0.6;

  :active,
  :hover,
  :focus {
    box-shadow: none;
    opacity: 1;
  }

  svg {
    color: ${(props) => props.theme['green-300']};
  }
`;

export const ButtonClose = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;

  position: absolute;
  top: 1rem;

  opacity: 0.6;

  :active,
  :hover,
  :focus {
    box-shadow: none;
    opacity: 1;
  }

  svg {
    color: ${(props) => props.theme['yellow-500']};
  }
`;

export const Span = styled.span`
  max-width: 50%;
  color: ${({ theme }) => theme['yellow-500']};
  margin: 0 0.5rem;
`;
