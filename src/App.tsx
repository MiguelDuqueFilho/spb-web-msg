import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { defaultTheme } from './styles/themes/default';
import { GlobalStyled } from './styles/global';
import { Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { StyledToastContainer } from './styles/toast';
import { Router } from './router';
import { MessagesProvider } from './contexts/MessagesContext';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <MessagesProvider>
          <Router />
        </MessagesProvider>
      </BrowserRouter>
      <StyledToastContainer transition={Zoom} />
      <GlobalStyled />
    </ThemeProvider>
  );
}
