import styled from 'styled-components';
// import 'react-multi-date-picker/styles/backgrounds/bg-gray.css';
// bloco

import DataPicker from 'react-multi-date-picker';
import InputIcon from 'react-multi-date-picker/components/input_icon';

interface ContainerProps {
  choice: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem 1.5rem;
  margin-top: 0.7rem;
  background: ${({ theme }) => theme['gray-700']};
  border-radius: 8px;
  box-shadow: 10px 5px 5px ${({ theme }) => theme.shadow};
  gap: 1rem;

  // control choice
  display: ${({ choice }) => (choice ? 'normal' : 'none')};

  .icon {
    color: ${({ theme }) => theme['gray-100']};
  }
  .bg-theme.rmdp-wrapper,
  .bg-theme .rmdp-month-picker,
  .bg-theme .rmdp-year-picker,
  .bg-theme .rmdp-time-picker div input,
  .rmdp-container .bg-theme.ep-arrow::after {
    background-color: #312f2f;
    color: #c4c7ca;
  }

  .bg-theme .rmdp-day:not(.rmdp-deactive),
  .bg-theme .rmdp-time-picker div .rmdp-am,
  .bg-theme .rmdp-header-values,
  .bg-theme .rmdp-panel-header {
    color: #c4c7ca;
  }

  .bg-theme .rmdp-day.rmdp-range {
    color: white;
  }

  .bg-theme .rmdp-panel-body li {
    color: #f5f5f5;
  }

  .bg-theme .rmdp-day.rmdp-deactive,
  .bg-theme .rmdp-day.rmdp-disabled {
    color: #87898b;
  }

  .rmdp-container .bg-theme.ep-arrow[direction='top'] {
    border-bottom: 1px solid #312f2f;
  }

  .rmdp-container .bg-theme.ep-arrow[direction='left'] {
    border-right: 1px solid #312f2f;
  }

  .rmdp-container .bg-theme.ep-arrow[direction='right'] {
    border-left: 1px solid #312f2f;
  }

  .rmdp-container .bg-theme.ep-arrow[direction='bottom'] {
    border-top: 1px solid #312f2f;
  }

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;

export const InputIconCustom = styled(InputIcon)`
  padding: 0 1rem;
  background: transparent;
  border-radius: 8px;

  border: none;
  width: calc(1rem * 10);
  min-height: 2rem;

  font-family: 'Roboto Mono', monospace;
  font-size: 1rem;

  color: ${({ theme }) => theme['gray-100']};

  :focus {
    border: 2px solid ${({ theme }) => theme['green-500']};
  }

  :not(Input[required]) {
    background: ${({ theme }) => theme['gray-500']};
  }
`;

export const InputDataPicker = styled(DataPicker)`
  background: ${({ theme }) => theme['gray-100']};
`;
