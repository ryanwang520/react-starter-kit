import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import auth from './auth'

const Button = () => {
  const navigate = useNavigate()
  return auth.isAuthenticated ? (
    <p>
      welcome
      <button
        onClick={async function () {
          await auth.signout()
          navigate('/')
        }}
      >
        logout
      </button>
    </p>
  ) : (
    <p>you are not login</p>
  )
}

const Header = () => {
  return (
    <header style={{ margin: '5px 0' }}>
      <Button />
      <Link style={{ margin: '5px' }} to="/">
        home
      </Link>
      <Link style={{ margin: '5px' }} to="/about">
        about
      </Link>
      <Link to="/private">trend</Link>
    </header>
  )
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
