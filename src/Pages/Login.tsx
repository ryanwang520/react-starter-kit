import React from 'react'
import auth from '../auth'
import { useLocation, useHistory } from 'react-router-dom'

export default function Login() {
  let history = useHistory()
  let location = useLocation<{ from: { pathname: string } }>()
  let { from } = location.state || { from: { pathname: '/' } }

  const login = async () => {
    try {
      await auth.authenticate()
      history.replace(from)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <button onClick={login}>click me to login</button>
    </div>
  )
}
