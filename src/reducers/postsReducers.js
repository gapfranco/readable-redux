import actionsTypes from '../actions/actionTypes'

export const posts = (state = [], action) => {
  const {type, ...post} = action
  switch (type) {
    case actionsTypes.ADD_POST:
      return [
        ...state,
        {
          id: post.id,
          timestamp: Date.now(),
          title: post.title,
          body: post.body,
          author: post.author,
          category: post.category,
          voteScore: 0,
          deleted: false
        }
      ]
    case actionsTypes.UPDATE_POST:
      return state.map(oldPost =>
        (oldPost.id === post.id)
          ? {...oldPost, ...post}
          : oldPost
      )
    case actionsTypes.DELETE_POST:
      return state.filter(oldPost => oldPost.id !== post.id)
    case actionsTypes.VOTE_POST:
      return state.map(oldPost =>
        (oldPost.id === post.id)
          ? {...oldPost, voteScore: ++oldPost.voteScore}
          : oldPost
      )
    default:
      return state
  }
}

export const sortPosts = (state = 'BY_VOTE', action) => {
  switch (action.type) {
    case actionsTypes.SORT_POSTS:
      return action.sortBy
    default:
      return state
  }
}

export const categoryFilter = (state = '', action) => {
  switch (action.type) {
    case actionsTypes.CATEGORY_FILTER:
      return action.categoryFilter
    default:
      return state
  }
}
