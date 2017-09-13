import actionTypes from './actionTypes'
import v4 from 'uuid'

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
