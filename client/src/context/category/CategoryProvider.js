import {createContext, useContext, useReducer} from 'react'
import categoryReducer from './categoryReducer'

const categoryContext = createContext()

categoryContext.displayName = 'CategoryContext'

export const useCategory = () => {
  const context = useContext(categoryContext)
  if (!context) {
    throw new Error('Component must be wrapped with in CategoryContextProvider')
  }
  return context
}

export const CategoryProvider = props => {
  const [state, dispatch] = useReducer(categoryReducer, {
    isLoading: false,
    data: null,
    error: null,
  })
  return <categoryContext.Provider value={[state, dispatch]} {...props} />
}
