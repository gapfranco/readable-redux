import actionTypes from './actionTypes'
import v4 from 'uuid'
import postsApi from '../api/postsApi'

export const loadComments = (postId) => {  
  return function(dispatch) {
    return postsApi.getComments(postId).then(comments => {
      dispatch(loadCommentsSuccess(comments));
    }).catch(error => {
      throw(error);
    });
  };
}

export const loadCommentsSuccess = (comments) => {  
  return {type: actionTypes.LOAD_COMMENTS_SUCCESS, comments};
}

export const addComment = (parentId, title, body, author) => (
  {
    type: actionTypes.ADD_COMMENT,
    parentId: parentId,
    id: v4(),
    timestamp: Date.now(),
    voteScore: 0,
    deleted: false,
    title,
    body,
    author
  }
)

export const updateComment = (id, title, body) => (
  {
    type: actionTypes.UPDATE_COMMENT,
    id,
    title,
    body
  }
)

export const deleteComment = (id) => (
  {
    type: actionTypes.DELETE_COMMENT,
    id: id
  }
)

export const sortComments = (sortBy) => (
  {
    type: actionTypes.SORT_COMMENTS,
    sortBy: sortBy
  }
)

export const voteComment = (id) => (
  {
    type: actionTypes.VOTE_COMMENT,
    id: id
  }
)
