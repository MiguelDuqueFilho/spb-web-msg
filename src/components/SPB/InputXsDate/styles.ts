import styled from 'styled-components';
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
    background-color: ${({ theme }) => theme['gray-700']};
    color: ${({ theme }) => theme['gray-100']};
  }

  .bg-theme .rmdp-day:not(.rmdp-deactive),
  .bg-theme .rmdp-time-picker div .rmdp-am,
  .bg-theme .rmdp-header-values,
  .bg-theme .rmdp-panel-header {
    color: ${({ theme }) => theme['gray-300']};
  }

  .bg-theme .rmdp-day.rmdp-range {
    color: ${({ theme }) => theme['gray-100']};
  }

  .bg-theme .rmdp-panel-body li {
    color: ${({ theme }) => theme['gray-100']};
  }

  .bg-theme .rmdp-day.rmdp-deactive,
  .bg-theme .rmdp-day.rmdp-disabled {
    color: ${({ theme }) => theme['gray-300']};
  }

  .rmdp-container .bg-theme.ep-arrow[direction='top'] {
    border-bottom: 1px solid ${({ theme }) => theme['gray-700']};
  }

  .rmdp-container .bg-theme.ep-arrow[direction='left'] {
    border-right: 1px solid ${({ theme }) => theme['gray-700']};
  }

  .rmdp-container .bg-theme.ep-arrow[direction='right'] {
    background: transparent;
    border: none;
    box-shadow: none;
  }

  .rmdp-container .bg-theme.ep-arrow[direction='bottom'] {
    border-top: 1px solid ${({ theme }) => theme['gray-700']};
  }

  .rmdp-container .bg-theme.ep-arrow {
    border: solid ${({ theme }) => theme['yellow-500']};
  }

  .bg-theme .rmdp-wrapper {
    border: 1px solid ${({ theme }) => theme['rmdp-secondary']};
    box-shadow: 0 0 5px ${({ theme }) => theme['rmdp-secondary']};
  }

  .bg-theme .rmdp-panel-body li {
    background-color: ${({ theme }) => theme['rmdp-primary']};
    box-shadow: 0 0 2px ${({ theme }) => theme['rmdp-secondary']};
  }

  .bg-theme .rmdp-week-day {
    color: ${({ theme }) => theme['rmdp-primary']};
  }

  .bg-theme .rmdp-day.rmdp-deactive {
    color: ${({ theme }) => theme['rmdp-secondary']};
  }

  .bg-theme .rmdp-range {
    background-color: ${({ theme }) => theme['rmdp-primary']};
    box-shadow: 0 0 3px ${({ theme }) => theme['rmdp-shadow']};
  }

  .bg-theme .rmdp-arrow {
    border: solid ${({ theme }) => theme['rmdp-primary']};
    border-width: 0 2px 2px 0;
  }

  .bg-theme .rmdp-arrow-container:hover {
    background-color: ${({ theme }) => theme['rmdp-primary']};
    box-shadow: 0 0 3px ${({ theme }) => theme['rmdp-secondary']};
  }

  .bg-theme .rmdp-panel-body::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme['rmdp-primary']};
  }

  .bg-theme .rmdp-day.rmdp-today span {
    background-color: ${({ theme }) => theme['rmdp-today']};
  }

  .bg-theme .rmdp-rtl .rmdp-panel {
    border-left: unset;
    border-right: 1px solid ${({ theme }) => theme['rmdp-secondary']};
  }

  .bg-theme .rmdp-day.rmdp-selected span:not(.highlight) {
    background-color: ${({ theme }) => theme['rmdp-primary']};
    box-shadow: 0 0 3px ${({ theme }) => theme['rmdp-shadow']};
  }

  .bg-theme .rmdp-day:not(.rmdp-day-hidden) span:hover {
    background-color: ${({ theme }) => theme['rmdp-hover']};
  }

  .bg-theme .b-deselect {
    color: ${({ theme }) => theme['rmdp-deselect']};
    background-color: white;
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

  border: 1px solid ${({ theme }) => theme['gray-400']};

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

// export const InputDataPicker = styled(DataPicker)`
export const InputDataPicker = styled.input`
  background: ${({ theme }) => theme['gray-700']};
  border: none;
  /* box-shadow: 6px 5px 5px ${({ theme }) => theme.shadow}; */
  color: ${({ theme }) => theme['gray-100']};
  padding: 4px 12px;

  ::-webkit-calendar-picker-indicator {
    /* filter: invert(1); */
    margin-right: -0.35em;
    filter: invert(48%) sepia(30%) saturate(0) hue-rotate(203deg)
      brightness(90%) contrast(95%);
    cursor: pointer;
  }

  ::-webkit-calendar-picker-indicator:hover {
    /* background: transparent; */
    filter: invert(60%) sepia(30%) saturate(1854%) hue-rotate(3deg)
      brightness(107%) contrast(106%);
    cursor: pointer;
  }

  ::-webkit-datetime-edit-day-field:focus,
  ::-webkit-datetime-edit-month-field:focus,
  ::-webkit-datetime-edit-year-field:focus {
    background-color: yellow;
    color: black;
    outline: none;
  }
`;
