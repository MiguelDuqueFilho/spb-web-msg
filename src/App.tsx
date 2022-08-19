import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyled } from './styles/global'
import { Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { StyledToastContainer } from './styles/toast'
import { Router } from './router'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
        <StyledToastContainer transition={Slide} />
      </BrowserRouter>
      <GlobalStyled />
    </ThemeProvider>
  )
}
