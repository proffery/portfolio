import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

import App from './App'
import { themeObj } from './common/const/themeObj'
import { GlobalStyles } from './styles/Global.styled'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <ThemeProvider theme={themeObj}>
    <App />
    <GlobalStyles theme={themeObj} />
  </ThemeProvider>
)
