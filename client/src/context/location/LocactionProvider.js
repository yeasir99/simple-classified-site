import {createContext, useContext, useReducer} from 'react'
import locationReducer from './locationReducer'

const locationContext = createContext()

locationContext.displayName = 'LocationContext'

export const useLocation = () => {
  const context = useContext(locationContext)
  if (!context) {
    throw new Error('Component must be wrapped with in LocationContextProvider')
  }
  return context
}

export const LocationProvider = props => {
  const [state, dispatch] = useReducer(locationReducer, {
    isLoading: false,
    data: null,
    error: null,
  })
  return <locationContext.Provider value={[state, dispatch]} {...props} />
}
