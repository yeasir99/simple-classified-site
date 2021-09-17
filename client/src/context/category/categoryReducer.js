import {categoryActionTypes} from './categoryActionTypes'

const categoryReducer = (state, action) => {
  switch (action.type) {
    case categoryActionTypes.CATEGORY_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      }
    case categoryActionTypes.CATEGORY_REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      }
    case categoryActionTypes.CATEGORY_REQUEST_FAIL:
      return {
        isLoading: false,
        data: null,
        error: action.payload,
      }
    default:
      throw new Error(`Unsupported type: ${action.type}`)
  }
}

export default categoryReducer
