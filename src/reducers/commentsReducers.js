import actionsTypes from '../actions/actionTypes'

export const comments = (state = [], action) => {
  const {type, ...comment} = action
  switch (type) {
    case actionsTypes.LOAD_COMMENTS:
      // Flatten comment.comments (array of arrays of comments)
      // Alternative: return comment.comments.reduce((a, b) => a.concat(b), [])
      return [].concat(...comment.comments)
    case actionsTypes.ADD_COMMENT:
      return [
        ...state,
        {
          id: comment.id,
          parentId: comment.parentId,
          timestamp: Date.now(),
          body: comment.body,
          author: comment.author,
          voteScore: 1,
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
      return state.map(oldComment =>
        (oldComment.id === comment.id)
          ? {...oldComment, deleted: true}
          : oldComment
      )
    case actionsTypes.VOTE_COMMENT:
      return state.map(oldComment =>
        (oldComment.id === comment.id)
          ? {...oldComment, voteScore: ++oldComment.voteScore}
          : oldComment
      )
    case actionsTypes.VOTE_COMMENT_DOWN:
      return state.map(oldComment =>
        (oldComment.id === comment.id)
          ? {...oldComment, voteScore: --oldComment.voteScore}
          : oldComment
      )
    default:
      return state
  }
}

export const sortComments = (state = 'Sort by Votes', action) => {
  if (action.type === actionsTypes.SORT_COMMENTS) {
    return action.sortBy
  } else {
    return state
  }
}
