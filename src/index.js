import React from 'react'
import ReactDOM from 'react-dom'
import printMe from './print'
import { cube } from './math.js'
import App from './App'
if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!')
}

ReactDOM.render(<App />, document.getElementById('root'))

if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!')
    printMe()
  })
}
