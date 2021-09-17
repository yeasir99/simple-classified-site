import {categoryActionTypes} from './categoryActionTypes'
import axios from 'axios'

export const getCategory = async dispatch => {
  try {
    dispatch({
      type: categoryActionTypes.CATEGORY_REQUEST,
    })
    const {data} = await axios('/api/v1/catagory')
    dispatch({
      type: categoryActionTypes.CATEGORY_REQUEST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: categoryActionTypes.CATEGORY_REQUEST_FAIL,
      payload: error,
    })
  }
}
