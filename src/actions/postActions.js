import actionTypes from './actionTypes'
import v4 from 'uuid'
import postsApi from '../api/postsApi'

/**
 * Load posts async action. Calls API and dispatches loadPostsSucess
 */
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
  return {type: actionTypes.LOAD_POSTS, posts};
}

/**
 * Load categories action. Calls API and dispatches loadCategories
 */
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

/**
 * Add post action. Calls API and dispatches addPostSuccess
 */
export const addPost = (title, body, author, category) => {
  return (dispatch) => {
    const id = v4()
    const dt = Date.now()
    return postsApi.createPost(id, dt, title, body, author, category)
      .then(() => dispatch(addPostSuccess(id, dt, title, body, author, category)))
      .catch(error => {
        throw(error);
      });
  }
}

export const addPostSuccess = (id, dt, title, body, author, category) => (
  {
    type: actionTypes.ADD_POST,
    id: id,
    timestamp: dt,
    voteScore: 1,
    deleted: false,
    title,
    body,
    author,
    category
  }
)

/**
 * Update post action. Calls API abd dispatches updatePostSuccess 
 */
export const updatePost = (id, title, body, category) => {
  return (dispatch) => {
    return postsApi.updatePost(id, title, body, category)
      .then(() => dispatch(updatePostSuccess(id, title, body, category)))
      .catch(error => {
        throw(error);
      });
  }
}

export const updatePostSuccess = (id, title, body, category) => (
  {
    type: actionTypes.UPDATE_POST,
    id,
    title,
    body,
    category
  }
)

/**
 * Vote post action. Calls API abd dispatches votePostSuccess 
 */
export const votePost = (id) => {
  return (dispatch) => {
    return postsApi.votePost(id, 'upVote')
      .then(() => dispatch(votePostSuccess(id)))
      .catch(error => {
        throw(error);
      });
  }
}

export const votePostSuccess = (id) => (
  {
    type: actionTypes.VOTE_POST,
    id: id
  }
)

/**
 * Vote post down action. Calls API abd dispatches votePostDownSuccess 
 */
export const votePostDown = (id) => {
  return (dispatch) => {
    return postsApi.votePost(id, 'downVote')
      .then(() => dispatch(votePostDownSuccess(id)))
      .catch(error => {
        throw(error);
      });
  }
}

export const votePostDownSuccess = (id) => (
  {
    type: actionTypes.VOTE_POST_DOWN,
    id: id
  }
)

/**
 * Delete post action. Calls API abd dispatches deletePostSuccess 
 */
export const deletePost = (id) => {
  return (dispatch) => {
    return postsApi.deletePost(id)
      .then(() => dispatch(deletePostSuccess(id)))
      .catch(error => {
        throw(error);
      });
  }
}

export const deletePostSuccess = (id) => (
  {
    type: actionTypes.DELETE_POST,
    id: id
  }
)

export const sortPosts = (sortBy) => (
  {
    type: actionTypes.SORT_POSTS,
    sortBy: sortBy
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
