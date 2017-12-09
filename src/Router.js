import React, { Fragment } from 'react'
import Loadable from 'react-loadable'

import { BrowserRouter, Route, Link } from 'react-router-dom'
import styled from 'styled-components'

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

export default () => (
  <BrowserRouter>
    <Fragment>
      <StyledLink to="/">home</StyledLink>
      <StyledLink to="/about">about</StyledLink>
      <StyledLink to="/trend">trend</StyledLink>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/trend" component={Trend} />
    </Fragment>
  </BrowserRouter>
)
