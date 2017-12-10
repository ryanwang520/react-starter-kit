import React, { Fragment } from 'react'
import Loadable from 'react-loadable'
import Header from './Containers/Header'

import {
  BrowserRouter,
  Route,
  Link,
  Redirect,
  Switch,
  withRouter,
} from 'react-router-dom'
import styled from 'styled-components'
import auth from './auth'

const DefaultLoadingIndicator = () => null

const StyledLink = styled(Link)`
  padding: 10px;
`

const AsyncLoading = (imported, LoadingIndicator = DefaultLoadingIndicator) =>
  Loadable({
    loader: imported,
    loading: LoadingIndicator,
  })

const Home = AsyncLoading(() =>
  import(/* webpackChunkName: "Home" */ './Containers/Home')
)
const About = AsyncLoading(() =>
  import(/* webpackChunkName: "About" */ './Containers/About')
)
const Trend = AsyncLoading(() =>
  import(/* webpackChunkName: "Trend" */ './Containers/Trend')
)
const Login = AsyncLoading(() =>
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
    <Switch>
      <Route path="/login" component={Login} />
      <Fragment>
        <AuthButton />
        <Header>
          <StyledLink to="/">home</StyledLink>
          <StyledLink to="/about">about</StyledLink>
          <StyledLink to="/trend">trend</StyledLink>
        </Header>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <PrivateRoute path="/trend" component={Trend} />
      </Fragment>
    </Switch>
  </BrowserRouter>
)
