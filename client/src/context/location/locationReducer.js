import {locationActionTypes} from './locationActionTypes'

export const addressReducer = (state, action) => {
  switch (action.type) {
    case locationActionTypes.LOCATION_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      }
    case locationActionTypes.LOCATION_REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      }
    case locationActionTypes.LOCATION_REQUEST_FAIL:
      return {
        isLoading: false,
        data: null,
        error: action.payload,
      }
    default:
      throw new Error(`Unsupported type: ${action.type}`)
  }
}

export default addressReducer
