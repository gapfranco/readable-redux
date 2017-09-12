import actions from '../actions'

const comments = (state = [], action) => {
  switch (action.type) {
    case actions.ADD_COMMENT:
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
    case actions.UPDATE_COMMENT:
      return state.map(comment =>
        (comment.id === action.id)
          ? Object.assign({...comment}, action)
          : comment
      )
    case actions.DELETE_COMMENT:
      return state.filter(post => post.id !== action.id)
    case actions.VOTE_COMMENT:
      return state.map(comment =>
        (comment.id === action.id)
          ? {...post, voteScore: ++comment.voteScore}
          : comment
      )
    default:
      return state
  }
}

export default posts