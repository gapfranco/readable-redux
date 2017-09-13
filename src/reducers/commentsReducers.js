import actionsTypes from '../actions/actionTypes'

export const comments = (state = [], action) => {
  switch (action.type) {
    case actionsTypes.ADD_COMMENT:
      return [
        ...state,
        {
          id: action.id,
          parentId: action.parentId,
          timestamp: Date.now(),
          body: action.body,
          author: action.author,
          voteScore: 0,
          deleted: false,
          parentDeleted: false
        }
      ]
    case actionsTypes.UPDATE_COMMENT:
      return state.map(comment =>
        (comment.id === action.id)
          ? Object.assign({...comment}, action)
          : comment
      )
    case actionsTypes.DELETE_COMMENT:
      return state.filter(post => post.id !== action.id)
    case actionsTypes.VOTE_COMMENT:
      return state.map(comment =>
        (comment.id === action.id)
          ? {...comment, voteScore: ++comment.voteScore}
          : comment
      )
    default:
      return state
  }
}

export const sortComments = (state = 'BY_VOTE', action) => {
  switch (action.type) {
    case actionsTypes.SORT_COMMENTS:
      return action.sortBy
    default:
      return state
  }
}
