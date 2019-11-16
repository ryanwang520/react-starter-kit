import React, { lazy, Suspense } from 'react'

import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import auth from './auth'

const Home = lazy(() => import(/* webpackChunkName: "Home" */ './Pages/Home'))
const NotFound = lazy(() =>
  import(/* webpackChunkName: "NotFound" */ './Pages/NotFound')
)
const About = lazy(() =>
  import(/* webpackChunkName: "About" */ './Pages/About')
)
const Private = lazy(() =>
  import(/* webpackChunkName: "Private" */ './Pages/Private')
)
const Login = lazy(() =>
  import(/* webpackChunkName: "Login" */ './Pages/Login')
)

const PrivateRoute = ({ children, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      auth.isAuthenticated ? (
        children
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

export default () => (
  <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <PrivateRoute path="/private">
          <Private />
        </PrivateRoute>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Suspense>
  </BrowserRouter>
)
