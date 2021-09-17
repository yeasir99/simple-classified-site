import {postActionTypes} from './postActionTypes'
import axios from 'axios'

export const createPost = async (postData, dispatch) => {
  try {
    dispatch({
      type: postActionTypes.CREATE_NEW_POST_REQUEST,
    })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const {data} = await axios.post('/api/v1/post/create-new', postData, config)

    dispatch({
      type: postActionTypes.CREATE_NEW_POST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    console.log(error)
    dispatch({
      type: postActionTypes.CREATE_NEW_POST_FAIL,
    })
  }
}

export const getPostsByUser = async dispatch => {
  try {
    dispatch({
      type: postActionTypes.GET_POSTS_BY_USER_REQUEST,
    })
    const {data} = await axios.get('/api/v1/post')
    dispatch({
      type: postActionTypes.GET_POSTS_BY_USER_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: postActionTypes.GET_POSTS_BY_USER_FAIL,
      payload: error,
    })
  }
}

export const grabFormData = dispatch => data => {
  dispatch({
    type: postActionTypes.GRAB_FORM_DATA,
    payload: data,
  })
}

export const grabPostCity = dispatch => city => {
  dispatch({
    type: postActionTypes.GRAB_POST_CITY,
    payload: city,
  })
}

export const grabPostCategory = dispatch => catagory => {
  dispatch({
    type: postActionTypes.GRAB_POST_CATAGORY,
    payload: catagory,
  })
}

export const setEdit = dispatch => {
  dispatch({
    type: postActionTypes.SET_EDIT,
  })
}
