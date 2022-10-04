import styled from 'styled-components';

export const GridContainer = styled.div`
  position: relative;

  max-height: 100%;
  height: 100%;

  max-width: 1440px;
  width: 100%;

  padding: 0 0.1rem;
  margin: 0 auto;

  border-radius: 8px;

  &:before,
  &:after {
    content: '';
    display: table;
  }

  &:after {
    clear: both;
  }
`;

export const HeaderRow = styled.div`
  width: 100%;
  /* height: auto; */
  float: left;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  padding: 0.3rem 0.2rem;
  text-align: left;

  background: ${({ theme }) => theme['gray-600']};
  color: ${({ theme }) => theme['gray-100']};
  border: solid 1px ${({ theme }) => theme['yellow-500']};
  color: solid 1px ${({ theme }) => theme['yellow-500']};
  border-radius: 8px;

  font-size: 0.9rem;
  line-height: 1.6;

  &:before,
  &:after {
    content: '';
    display: table;
  }
  &:after {
    clear: both;
  }
`;

export const GridContent = styled.div`
  position: relative;

  width: 100%;
  max-height: 100%;
  height: auto;

  overflow-y: auto;

  font-size: 0.875rem;

  ::-webkit-scrollbar {
    width: 9px;
    border: 1px solid ${({ theme }) => theme['gray-900']};
    border-radius: 8px;
  }
  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme['gray-700']};
    border-radius: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme['gray-400']};
    border-radius: 8px;
  }

  border-radius: 8px;

  &:before,
  &:after {
    content: '';
    display: table;
  }
  &:after {
    clear: both;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: auto;
  float: left;

  background: ${({ theme }) => theme['gray-700']};
  border-top: 4px solid ${({ theme }) => theme['gray-800']};
  color: ${({ theme }) => theme['gray-100']};
  border-radius: 8px;

  &:before,
  &:after {
    content: '';
    display: table;
  }
  &:after {
    clear: both;
  }
`;

function getWidthGrid(value: number) {
  if (!value) return;

  const width = (value / 12) * 100;
  return `width: ${width}%;`;
}

interface ColumnProps {
  desktop?: number;
  tablet?: number;
  mobile?: number;
}

export const Column = styled.div<ColumnProps>`
  float: left;
  padding: 0 0.25rem;
  min-height: 1px;
  width: 100%;

  @media only screen and (max-width: 768px) {
    ${({ mobile }) => mobile && getWidthGrid(mobile)}
  }

  @media only screen and (min-width: 768px) {
    ${({ tablet }) => tablet && getWidthGrid(tablet)}
  }

  @media only screen and (min-width: 768px) {
    ${({ desktop }) => desktop && getWidthGrid(desktop)}
  }
`;
