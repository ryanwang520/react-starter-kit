// @flow
import React from 'react'
import Router from './Router'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles'
import { hot } from 'react-hot-loader/root'

const App = () => (
  <ThemeProvider theme={theme}>
    <Router />
  </ThemeProvider>
)
export default hot(App)
