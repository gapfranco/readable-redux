import actions from '../actions'

export const sortPosts = (state = 'BY_VOTE', action) => {
  switch (action.type) {
    case actions.SORT_POSTS:
      return action.sortBy
    case defaut:
      return state
  }
}
