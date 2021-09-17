import {createContext, useReducer, useContext} from 'react'
import authReducer from './authReducer'

const authContext = createContext()

authContext.displayName = 'AuthContext'

export const useAuth = () => {
  const context = useContext(authContext)
  if (!context) {
    throw new Error('Component must be wrapped with in AuthContextProvider')
  }
  return context
}

export const AuthProvider = props => {
  const [state, dispatch] = useReducer(authReducer, {
    isAuthenticated: false,
    loading: false,
    user: {},
    error: null,
  })

  return <authContext.Provider value={[state, dispatch]} {...props} />
}
