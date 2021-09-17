import axios from 'axios'
import {locationActionTypes} from './locationActionTypes'

export const getLocation = async dispatch => {
  try {
    dispatch({
      type: locationActionTypes.LOCATION_REQUEST,
    })

    const {data} = await axios.get('/api/v1/address')

    dispatch({
      type: locationActionTypes.LOCATION_REQUEST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: locationActionTypes.LOCATION_REQUEST_FAIL,
      payload: error,
    })
  }
}
