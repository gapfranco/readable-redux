import actions from '../actions'

export const categoryFilter = (state = '', action) => {
  switch (action.type) {
    case actions.CATEGORY_FILTER:
      return action.categoryFilter
    case defaut:
      return state
  }
}
