import actions from '../actions'

export const sortComments = (state = 'BY_VOTE', action) => {
  switch (action.type) {
    case actions.SORT_COMMENTS:
      return action.sortBy
    case defaut:
      return state
  }
}
