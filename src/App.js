import React from 'react'
import Router from './Router'

let App
if (module.hot) {
  // dirty hack base on https://medium.com/@giang.nguyen.dev/hot-loader-with-react-loadable-c8f70c8ce1a6
  // force trigger a render on route
  App = () => <Router key={Math.random()} />
} else {
  App = () => <Router />
}

export default App
