import {Route, Redirect} from 'react-router-dom'
import {useAuth} from './../context/auth/Auth'

const AuthenticatedRoute = ({component: Component, ...rest}) => {
  const [{isAuthenticated, user}] = useAuth()
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated && user.userType === 'user' ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    ></Route>
  )
}

export default AuthenticatedRoute
