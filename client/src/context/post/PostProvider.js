import {createContext, useContext, useReducer} from 'react'
import postReducer from './postReducer'

const postContext = createContext()
postContext.displayName = 'PostContext'

export const usePost = () => {
  const context = useContext(postContext)
  if (!context) {
    throw new Error('Component must be wrapped with in PostContextProvider')
  }
  return context
}

export const PostProvider = props => {
  const [state, dispatch] = useReducer(postReducer, {
    loading: false,
    posts: [],
    error: null,
    edit: false,
  })
  return <postContext.Provider value={[state, dispatch]} {...props} />
}
