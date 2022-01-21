import React, { lazy, Suspense } from 'react'

import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  Navigate,
} from 'react-router-dom'
import auth from './auth'
import Layout from './Layout'

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

function RequireAuth({ children }: { children: JSX.Element }) {
  let location = useLocation()

  if (!auth.isAuthenticated) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return children
}

export default function Router() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/private"
              element={
                <RequireAuth>
                  <Private />
                </RequireAuth>
              }
            />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
