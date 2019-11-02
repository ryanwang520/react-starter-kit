import React, { lazy, Suspense } from 'react'

import {
  BrowserRouter,
  Route,
  Link,
  Redirect,
  Switch,
  withRouter,
} from 'react-router-dom'
import auth from './auth'

const Home = lazy(() =>
  import(/* webpackChunkName: "Home" */ './Containers/Home')
)
const About = lazy(() =>
  import(/* webpackChunkName: "About" */ './Containers/About')
)
const Trend = lazy(() =>
  import(/* webpackChunkName: "Trend" */ './Containers/Trend')
)
const Login = lazy(() =>
  import(/* webpackChunkName: "Login" */ './Containers/Login')
)

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      auth.isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location },
          }}
        />
      )
    }
  />
)

const Button = ({ history }) =>
  auth.isAuthenticated ? (
    <p>
      welcome
      <button
        onClick={async function() {
          await auth.signout()
          history.push('/')
        }}
      >
        logout
      </button>
    </p>
  ) : (
    <p>you are not login</p>
  )

const AuthButton = withRouter(Button)

export default () => (
  <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path="/login" component={Login} />
        <>
          <AuthButton />
          <header style={{ margin: '5px 0' }}>
            <Link style={{ margin: '5px' }} to="/">
              home
            </Link>
            <Link style={{ margin: '5px' }} to="/about">
              about
            </Link>
            <Link to="/trend">trend</Link>
          </header>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <PrivateRoute path="/trend" component={Trend} />
        </>
      </Switch>
    </Suspense>
  </BrowserRouter>
)
