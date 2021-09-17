import {postActionTypes} from './postActionTypes'

const postReducer = (state, action) => {
  switch (action.type) {
    case postActionTypes.GET_POSTS_BY_USER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case postActionTypes.GET_POSTS_BY_USER_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      }
    case postActionTypes.GET_POSTS_BY_USER_FAIL:
      return {
        ...state,
        posts: [],
        error: action.payload,
        loading: false,
      }
    case postActionTypes.GRAB_POST_CITY:
      return {
        ...state,
        postData: {
          ...state.postData,
          postCity: action.payload,
        },
      }
    case postActionTypes.GRAB_POST_CATAGORY:
      return {
        ...state,
        postData: {
          ...state.postData,
          postCatagory: action.payload,
        },
      }
    case postActionTypes.GRAB_FORM_DATA:
      return {
        ...state,
        edit: false,
        postData: {
          ...state.postData,
          formData: action.payload,
        },
      }
    case postActionTypes.SET_EDIT:
      return {
        ...state,
        edit: true,
      }
    case postActionTypes.CREATE_NEW_POST_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case postActionTypes.CREATE_NEW_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: [...state.posts, action.payload],
        postData: null,
      }
    case postActionTypes.CREATE_NEW_POST_FAIL:
      return {
        ...state,
        loading: false,
      }
    default:
      throw new Error(`Unsupported type: ${action.type}`)
  }
}

export default postReducer
