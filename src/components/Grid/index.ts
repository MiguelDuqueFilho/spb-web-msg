import styled from 'styled-components';

export const GridContainer = styled.div`
  position: relative;
  max-height: 100%;
  max-width: 1360px;

  padding-right: 1rem;
  padding-left: 1rem;
  margin-right: auto;
  margin-left: auto;
  width: 100%;

  background-color: ${({ theme }) => theme['gray-800']};
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
  height: auto;
  float: left;
  background-color: ${({ theme }) => theme['gray-800']};
  color: ${({ theme }) => theme['yellow-500']};
  border: solid 1px ${({ theme }) => theme['yellow-500']};
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

export const GridContent = styled.div`
  width: 100%;
  overflow-y: auto;
  max-height: 100%;
  border-radius: 8px;
  &:before,
  &:after {
    content: '';
    display: table;
  }
  &:after {
    clear: both;
  }

  @media only screen and (min-width: 768px) {
    max-height: 97%;
  }
`;

export const Row = styled.div`
  width: 100%;
  height: auto;
  float: left;
  background-color: ${({ theme }) => theme['gray-700']};
  color: ${({ theme }) => theme['gray-100']};

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
  padding: 0.25rem;
  min-height: 1px;
  width: 100%;

  @media only screen and (max-width: 768px) {
    ${({ mobile }) => mobile && getWidthGrid(mobile)}
  }

  @media only screen and (min-width: 768px) {
    ${({ tablet }) => tablet && getWidthGrid(tablet)}
  }

  @media only screen and (min-width: 1000px) {
    ${({ desktop }) => desktop && getWidthGrid(desktop)}
  }
`;
