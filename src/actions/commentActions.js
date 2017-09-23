import v4 from 'uuid'

import actionTypes from './actionTypes'
import postsApi from '../api/postsApi'

/**
 * Load all posts and for each post load all comments
 * Returns an array os arrays of comments
 */
export const loadAllComments = () => {
  return function(dispatch) {
    return postsApi.getAllPosts()
      .then(posts => posts.map(post => postsApi.getComments(post.id)))
      .then(comments => Promise.all(comments).then(list => dispatch(loadCommentsSuccess(list))))
      .catch(error => {
        throw(error);
      })
  }

}

export const loadCommentsSuccess = (comments) => {
  return {type: actionTypes.LOAD_COMMENTS, comments};
}

/**
 * Add comment action. Calls API and dispatches addCommentSuccess
 */
export const addComment = (parentId, body, author) => {
  return (dispatch) => {
    const id = v4()
    const dt = Date.now()
    return postsApi.createComment(id, dt, body, author, parentId)
      .then(() => dispatch(addCommentSuccess(id, dt, parentId, body, author)))
      .catch(error => {
        throw(error);
      });
  }
}

export const addCommentSuccess = (id, dt, parentId, body, author) => (
  {
    type: actionTypes.ADD_COMMENT,
    parentId: parentId,
    id: id,
    timestamp: dt,
    voteScore: 1,
    deleted: false,
    body,
    author
  }
)

/**
 * Update comment action. Calls API abd dispatches updateCommenttSuccess 
 */
export const updateComment = (id, body) => {
  return (dispatch) => {
    return postsApi.updateComment(id, body)
      .then(() => dispatch(updateCommentSuccess(id, body)))
      .catch(error => {
        throw(error);
      });
  }
}

export const updateCommentSuccess = (id, body) => (
  {
    type: actionTypes.UPDATE_COMMENT,
    id,
    body
  }
)

/**
 * Delete comment action. Calls API abd dispatches deleteCommentSuccess 
 */
export const deleteComment = (id) => {
  return (dispatch) => {
    return postsApi.deleteComment(id)
      .then(() => dispatch(deleteCommentSuccess(id)))
      .catch(error => {
        throw(error);
      });
  }
}

export const deleteCommentSuccess = (id) => (
  {
    type: actionTypes.DELETE_COMMENT,
    id: id
  }
)

/**
 * Vote comment action. Calls API abd dispatches voteCommentSuccess 
 */
export const voteComment = (id) => {
  return (dispatch) => {
    return postsApi.voteComment(id, 'upVote')
      .then(() => dispatch(voteCommentSuccess(id)))
      .catch(error => {
        throw(error);
      });
  }
}

export const voteCommentSuccess = (id) => (
  {
    type: actionTypes.VOTE_COMMENT,
    id: id
  }
)

/**
 * Vote comment down action. Calls API abd dispatches voteCommentDownSuccess 
 */
export const voteCommentDown = (id) => {
  return (dispatch) => {
    return postsApi.voteComment(id, 'downVote')
      .then(() => dispatch(voteCommentDownSuccess(id)))
      .catch(error => {
        throw(error);
      });
  }
}

export const voteCommentDownSuccess = (id) => (
  {
    type: actionTypes.VOTE_COMMENT_DOWN,
    id: id
  }
)

export const sortComments = (sortBy) => (
  {
    type: actionTypes.SORT_COMMENTS,
    sortBy: sortBy
  }
)

