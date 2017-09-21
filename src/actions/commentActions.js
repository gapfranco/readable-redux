import actionTypes from './actionTypes'
import v4 from 'uuid'
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
      });
  };

}

export const loadCommentsSuccess = (comments) => {
  return {type: actionTypes.LOAD_COMMENTS_SUCCESS, comments};
}

export const addComment = (parentId, body, author) => (
  {
    type: actionTypes.ADD_COMMENT,
    parentId: parentId,
    id: v4(),
    timestamp: Date.now(),
    voteScore: 0,
    deleted: false,
    body,
    author
  }
)

export const updateComment = (id, body) => (
  {
    type: actionTypes.UPDATE_COMMENT,
    id,
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
