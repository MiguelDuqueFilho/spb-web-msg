import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';

export const StyledToastContainer = styled(ToastContainer)`
  &&&.Toastify__toast-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    overflow: hidden;
    cursor: pointer;

    min-width: 10rem;
    width: 60rem;
    /* margin: 1rem; */

    background: transparent;

    border-radius: 8px;
    padding: 1rem;
  }

  .Toastify__toast {
    background: ${({ theme }) => theme['gray-700']};
    border-radius: 8px;

    min-width: 10rem;
    width: 60rem;
  }

  .Toastify__toast-body {
    color: ${({ theme }) => theme['gray-100']};
  }

  .Toastify__progress-bar {
    color: ${({ theme }) => theme['gray-100']};
  }

  .Toastify__progress-bar-theme--light {
    background: ${({ theme }) => theme.white};
  }
  .Toastify__progress-bar-theme--dark {
    background: ${({ theme }) => theme['gray-400']};
  }
  .Toastify__progress-bar--info {
    background: ${({ theme }) => theme.info};
  }
  .Toastify__progress-bar--success {
    background: ${({ theme }) => theme.success};
  }
  .Toastify__progress-bar--warning {
    background: ${({ theme }) => theme.warning};
  }
  .Toastify__progress-bar--error {
    background: ${({ theme }) => theme.error};
  }

  .Toastify__close-button {
    color: ${({ theme }) => theme['gray-100']};
  }
  .Toastify__close-button--default {
    color: ${({ theme }) => theme['gray-100']};
  }
  .Toastify__close-button > svg {
    color: ${({ theme }) => theme['gray-100']};
  }
  .Toastify__close-button:hover,
  .Toastify__close-button:focus {
    opacity: 1;
  }
`;
