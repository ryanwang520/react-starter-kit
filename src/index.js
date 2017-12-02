// main.js
import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './App'
import { Provider } from 'mobx-react'
import { observable, action } from 'mobx'

const todo = new class Todo {
  @observable title = 'todo'
  @action
  change = t => {
    console.log(this)
    console.log(t)
    console.log(this === window.todo)
    this.title = t
  }
}()
window.todo = todo
window.todo.title = 'sdfsdfsd'
const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider todo={todo} color="red">
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  )
}

render(App)

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App', () => {
    console.log('render')
    render(App)
  })
}
