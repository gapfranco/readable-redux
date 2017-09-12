import actions from '../actions'

const posts = (state = [], action) => {
  switch (action.type) {
    case actions.ADD_POST:
      return [
        ...state,
        {
          id: action.id,
          timestamp: Date.now(),
          title: action.title,
          body: action.body,
          author: action.author,
          category: action.category,
          voteScore: 0,
          deleted: false
        }
      ]
    case actions.UPDATE_POST:
      return state.map(post =>
        (post.id === action.id)
          ? Object.assign({...post}, action)
          : post
      )
    case actions.DELETE_POST:
      return state.filter(post => post.id !== action.id)
    case actions.VOTE_POST:
      return state.map(post =>
        (post.id === action.id)
          ? {...post, voteScore: ++post.voteScore}
          : post
      )
    default:
      return state
  }
}

export default posts