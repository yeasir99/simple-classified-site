import {Link} from 'react-router-dom'
import {useAuth} from '../context/auth/Auth'
import {logoutUser} from './../context/auth/authAction'

function Header() {
  const [{user, isAuthenticated}, authDispatch] = useAuth()
  return (
    <header className="mb-2 bg-blue-50 py-3">
      <div className="container">
        <div className="flex items-center">
          <div>
            <Link to="/">
              <h2 className="text-2xl font-semibold">Brand</h2>
            </Link>
          </div>
          <div className="ml-auto">
            {isAuthenticated ? (
              <>
                <Link
                  to={user.userType === 'admin' ? '/admin' : '/user'}
                  className="mr-2 inline-block"
                >
                  <button className="capitalize cursor-pointer px-3 py-1.5 bg-gray-400 text-gray-50 rounded-sm">
                    Dashboard
                  </button>
                </Link>
                <button
                  onClick={() => {
                    logoutUser(authDispatch)
                  }}
                  className="capitalize cursor-pointer px-3 py-1.5 bg-gray-400 text-gray-50 rounded-sm"
                >
                  logout
                </button>
              </>
            ) : (
              <Link to="/login">
                <button className="capitalize cursor-pointer px-3 py-1.5 bg-gray-400 rounded-sm text-gray-50">
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
