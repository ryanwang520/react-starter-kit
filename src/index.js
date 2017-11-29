import React from 'react';
import ReactDOM from 'react-dom';
import printMe from './print'


const App = () => <div>
  hello react
  <button onClick={printMe}>Click me</button>
  </div>;

ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    printMe()
  })
}
