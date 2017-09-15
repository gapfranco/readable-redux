import actionTypes from './actionTypes'
import v4 from 'uuid'
import postsApi from '../api/postsApi'

export const loadPosts = () => {  
  return function(dispatch) {
    return postsApi.getAllPosts().then(posts => {
      dispatch(loadPostsSuccess(posts));
    }).catch(error => {
      throw(error);
    });
  };
}

export const loadPostsSuccess = (posts) => {  
  return {type: actionTypes.LOAD_POSTS_SUCCESS, posts};
}

export const loadCategories = () => {  
  return function(dispatch) {
    return postsApi.getCategories().then(result => {
      dispatch(loadCategoriesSuccess(result.categories));
    }).catch(error => {
      throw(error);
    });
  };
}

export const loadCategoriesSuccess = (categories) => {  
  return {type: actionTypes.LOAD_CATEGORIES, categories};
}

export const addPost = (title, body, author, category) => (
  {
    type: actionTypes.ADD_POST,
    id: v4(),
    timestamp: Date.now(),
    voteScore: 0,
    deleted: false,
    title,
    body,
    author,
    category
  }
)

export const updatePost = (id, title, body, category) => (
  {
    type: actionTypes.UPDATE_POST,
    id,
    title,
    body,
    category
  }
)

export const sortPosts = (sortBy) => (
  {
    type: actionTypes.SORT_POSTS,
    sortBy: sortBy
  }
)

export const deletePost = (id) => (
  {
    type: actionTypes.DELETE_POST,
    id: id
  }
)

export const votePost = (id) => (
  {
    type: actionTypes.VOTE_POST,
    id: id
  }
)

export const setCategoryFilter = (categoryFilter) => (
  {
    type: actionTypes.CATEGORY_FILTER,
    categoryFilter: categoryFilter
  }
)

export const user = (user) => (
  {
    type: actionTypes.SET_USER,
    user: user
  }
)
