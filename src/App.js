import React from 'react'
import Router from './Router'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles'

let App
if (module.hot) {
  // dirty hack base on https://medium.com/@giang.nguyen.dev/hot-loader-with-react-loadable-c8f70c8ce1a6
  // force trigger a render on route
  App = () => <Router key={Math.random()} />
} else {
  App = () => <Router />
}

export default () => (
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
)
