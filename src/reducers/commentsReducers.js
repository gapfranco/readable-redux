import actionsTypes from '../actions/actionTypes'

export const comments = (state = [], action) => {
  const {type, ...comment} = action
  switch (type) {
    case actionsTypes.ADD_COMMENT:
      return [
        ...state,
        {
          id: comment.id,
          parentId: comment.parentId,
          timestamp: Date.now(),
          body: comment.body,
          author: comment.author,
          voteScore: 0,
          deleted: false,
          parentDeleted: false
        }
      ]
    case actionsTypes.UPDATE_COMMENT:
      return state.map(oldComment =>
        (oldComment.id === comment.id)
          ? {...oldComment, ...comment}
          : oldComment
      )
    case actionsTypes.DELETE_COMMENT:
      return state.filter(oldComment => oldComment.id !== comment.id)
    case actionsTypes.VOTE_COMMENT:
      return state.map(oldComment =>
        (oldComment.id === comment.id)
          ? {...oldComment, voteScore: ++oldComment.voteScore}
          : oldComment
      )
    default:
      return state
  }
}

export const sortComments = (state = 'BY_VOTE', action) => {
  if (action.type === actionsTypes.SORT_COMMENTS) {
    return action.sortBy
  } else {
    return state
  }
}
