
import React from 'react'
export default class App extends React.Component {
  constructor() {
    super()
    this.state = {name: ''}
    this.onClick = this.onClick.bind(this)
  }
  onClick() {
    import('lodash').then(_ => {
      this.setState({name:_.join(['hello', 'webpack code split'])})
    })

    import('./print').then(_ => {
      _.default()
    })

  }


  componentDidMount() {
  }
  render() {
    return (
      <div> react hello
        <button onClick={this.onClick}>Click me</button>
      <div> name is {this.state.name}</div>
      </div>)
  }
}

