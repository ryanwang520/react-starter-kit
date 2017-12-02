import React from 'react'
import { observable } from 'mobx'
import { inject, observer, Provider } from 'mobx-react'
// @inject('color')
// @observer
class Button0 extends React.Component {
  render() {
    return (
      <div>
        {this.props.todo.title}
        <button
          onClick={() => this.props.todo.change('changed title')}
          style={{ background: this.props.color }}
        >
          {this.props.children}sdf
        </button>
      </div>
    )
  }
}
const Button1 = observer(Button0)
const Button = inject('color', 'todo')(Button1)

class Message extends React.Component {
  render() {
    return (
      <div>
        {this.props.text} <Button>Delete</Button>
      </div>
    )
  }
}

class MessageList extends React.Component {
  render() {
    const children = this.props.messages.map(message => (
      <Message text={message.text} />
    ))
    return <div>{children}</div>
  }
}

const messages = [{ text: 'title' }]

const App = () => <MessageList messages={messages} />

export default App
