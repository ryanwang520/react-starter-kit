import React from 'react'

function connect(Comp) {
  console.log('connect')
  return Comp
}

@connect
export default class App extends React.Component {
  state = {
    name: 'hello',
  }
  async componentDidMount() {
    console.log(this)
  }
  onClick1 = () => async () => {
    console.log(this)
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
      // console.log({ ...this.state })
    }
  }
  onClick = () => {
    this.setState({ name: 'state this' })
  }
  render() {
    return (
      <div>
        hello react
        <button onClick={this.onClick1()}>{this.state.name}</button>
      </div>
    )
  }
}
