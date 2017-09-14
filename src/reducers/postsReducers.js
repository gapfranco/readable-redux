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
          deleted: false,
        }
      ]
    case actionsTypes.UPDATE_POST:
      return state.map(oldPost =>
        (oldPost.id === post.id)
          ? {...oldPost, ...post}
          : oldPost
      )
    case actionsTypes.DELETE_POST:
      return state.map(oldPost =>
        (oldPost.id === post.id)
          ? {...oldPost, deleted: true}
          : oldPost
      )
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

export const sortPosts = (state = 'Sort by Votes', action) => {
  if (action.type === actionsTypes.SORT_POSTS) {
    return action.sortBy
  } else {
    return state
  }
}

export const categoryFilter = (state = '', action) => {
  if (action.type === actionsTypes.CATEGORY_FILTER) {
    return action.categoryFilter
  } else {
    return state
  }
}

export const user = (state = 'elliot', action) => {
  if (action.type === actionsTypes.SET_USER) {
    return action.user
  } else {
    return state
  }
}
