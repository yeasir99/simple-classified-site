import {Route, Redirect} from 'react-router-dom'
import {useAuth} from '../src/context/auth/Auth'

const AdminRoute = ({component: Component, ...rest}) => {
  const [{isAuthenticated, user}] = useAuth()
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated && user.userType === 'admin' ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    ></Route>
  )
}

export default AdminRoute
