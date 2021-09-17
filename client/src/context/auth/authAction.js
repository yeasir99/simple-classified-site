import authActionTypes from './authActionTypes'
import axios from 'axios'

export const loginUser = async (tokenId, dispatch) => {
  try {
    dispatch({
      type: authActionTypes.LOGIN_REQUEST,
    })
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const {data} = await axios.post('/api/v1/login', tokenId, config)

    dispatch({
      type: authActionTypes.LOGIN_REQUEST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: authActionTypes.LOGIN_REQUEST_FAIL,
      payload: error,
    })
  }
}

export const getUser = async dispatch => {
  try {
    dispatch({
      type: authActionTypes.REQUEST_USER,
    })
    const {data} = await axios.get('/api/v1/login')
    dispatch({
      type: authActionTypes.REQUEST_USER_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: authActionTypes.REQUEST_USER_FAIL,
      payload: error,
    })
  }
}

export const logoutUser = async dispatch => {
  try {
    await axios.post('/api/v1/logout')
    dispatch({
      type: authActionTypes.LOGOUT,
    })
  } catch (error) {
    console.log(error)
  }
}
