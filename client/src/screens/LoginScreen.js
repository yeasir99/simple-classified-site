import {Link} from 'react-router-dom'
import {GoogleLogin} from 'react-google-login'
import {loginUser} from './../context/auth/authAction'
import {useAuth} from './../context/auth/Auth'
import {Redirect} from 'react-router-dom'
import Spinner from './../components/Spinner'

function LoginScreen() {
  const [{loading, user, isAuthenticated}, authDispatch] = useAuth()

  const responseGoogle = response => {
    loginUser({tokenId: response.tokenId}, authDispatch)
  }

  return (
    <div className="container">
      {!loading && isAuthenticated && (
        <Redirect to={user.userType === 'user' ? '/user' : '/admin'} />
      )}
      {loading ? (
        <Spinner className="text-6xl mx-auto mt-4" />
      ) : (
        <div className="relative">
          <div className="h-screen flex justify-center items-center">
            <Link to="/" className="backToHome">
              Back to Home
            </Link>

            <div className="border-2 border-yellow-50 px-14 py-12 bg-yellow-50 rounded-lg">
              <h2 className="text-center text-2xl mb-3 pb-3 border-b border-gray-300">
                Brand
              </h2>
              <h3 className="text-center text-xl mb-6">Login / Signup</h3>
              <GoogleLogin
                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                buttonText="Login With Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default LoginScreen
