import authActionTypes from './authActionTypes'

const authReducer = (state, action) => {
  switch (action.type) {
    case authActionTypes.LOGIN_REQUEST:
    case authActionTypes.REQUEST_USER:
      return {
        ...state,
        loading: true,
      }
    case authActionTypes.LOGIN_REQUEST_SUCCESS:
    case authActionTypes.REQUEST_USER_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        isAuthenticated: true,
        loading: false,
        error: null,
      }
    case authActionTypes.LOGIN_REQUEST_FAIL:
    case authActionTypes.REQUEST_USER_FAIL:
      return {
        ...state,
        user: {},
        isAuthenticated: false,
        loading: false,
        error: action.payload,
      }
    case authActionTypes.LOGOUT:
      return {
        ...state,
        user: {},
        isAuthenticated: false,
        loading: false,
        error: null,
      }
    default:
      throw new Error(`Unsupported type: ${action.type}`)
  }
}

export default authReducer
