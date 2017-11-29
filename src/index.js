import React from 'react';
import ReactDOM from 'react-dom';
import printMe from './print'
import {cube} from './math.js'
if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}


const App = () => <div>
  hello react
  <button onClick={printMe}>Click me</button>
  <div>{cube(5)}</div>
  </div>;

ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    printMe()
  })
}
