import React from 'react'

export default class App extends React.Component {
  state = {
    name: 'hello',
  }
  onClick = async () => {
    this.setState({ name: 'moon' })
    const p = new Promise((resolve, reject) => {
      resolve(12)
    })
    try {
      const res = await p
      console.log(res)
    } catch (err) {
      console.log('err')
    } finally {
      console.log('end')
    }
  }
  render() {
    return (
      <div>
        hello react
        <button onClick={this.onClick}>{this.state.name}</button>
      </div>
    )
  }
}
