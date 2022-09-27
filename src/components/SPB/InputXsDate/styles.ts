import styled from 'styled-components';

export const ContainerBase = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  min-height: 3.5rem;
  width: 100%;

  background: ${({ theme }) => theme['gray-700']};

  border-radius: 8px;
  box-shadow: 10px 5px 5px ${({ theme }) => theme.shadow};

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 1.5rem;
  margin-left: 1.5rem;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 1rem 0;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  @media screen and (max-width: 800px) {
    height: 100%;
  }
`;

export const InputDataPicker = styled.input`
  background: ${({ theme }) => theme['gray-700']};
  border: none;
  border-radius: 8px;

  border: 1px solid ${({ theme }) => theme['gray-400']};
  border-radius: 8px;
  color: ${({ theme }) => theme['gray-100']};

  padding: 4px 12px;
  font-family: 'Roboto Mono', monospace;
  font-size: 1rem;
  line-height: 1rem;

  ::-webkit-calendar-picker-indicator {
    margin-left: 10px;
    margin-right: -0.35em;
    filter: invert(48%) sepia(30%) saturate(0) hue-rotate(203deg)
      brightness(90%) contrast(95%);
    cursor: pointer;
  }

  ::-webkit-calendar-picker-indicator:hover {
    filter: invert(60%) sepia(30%) saturate(1854%) hue-rotate(3deg)
      brightness(107%) contrast(106%);
    cursor: pointer;
  }

  ::-webkit-datetime-edit-day-field:focus,
  ::-webkit-datetime-edit-month-field:focus,
  ::-webkit-datetime-edit-year-field:focus {
    background-color: ${({ theme }) => theme['gray-400']};
    color: ${({ theme }) => theme['gray-900']};
    outline: none;
  }
`;

export const ErrorMsg = styled.p`
  padding: 0.3rem 1rem;
  margin: 0.05rem 0;
  background: ${({ theme }) => theme.error};
  /* opacity: 60%; */
  border-radius: 6px;
  box-shadow: 10px 5px 5px ${({ theme }) => theme.shadow};
  color: ${({ theme }) => theme.white};
  font-size: 0.8rem;

  @media screen and (max-width: 800px) {
    justify-content: flex-start;
    width: 100%;
  }
`;
