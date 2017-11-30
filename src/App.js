
import React from 'react'
import printMe from './print.js'
console.log('app start')


export default () => <div>
  react hello
  <button onClick={printMe}>Click me</button>
  </div>;
