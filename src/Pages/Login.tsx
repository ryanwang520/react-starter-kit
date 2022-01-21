import React from 'react'
import auth from '../auth'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Login() {
  let navigate = useNavigate()

  let location = useLocation()
  let { from } = location.state || { from: { pathname: '/' } }

  const login = async () => {
    try {
      await auth.authenticate()
      navigate(from, { replace: true })
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
