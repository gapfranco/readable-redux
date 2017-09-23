import { sortPosts, setCategoryFilter, user } from '../actions/postActions'
import actionTypes from '../actions/actionTypes'

describe('actions', () => {
  it('should create an action to sort posts', () => {
    const sortBy = 'Sort by Vote'
    const expectedAction = {
      type: actionTypes.SORT_POSTS,
      sortBy: sortBy
    }    
    expect(sortPosts(sortBy)).toEqual(expectedAction)
  })
  it('should set category filter', () => {
    const categoryFilter = 'redux'
    const expectedAction = {
      type: actionTypes.CATEGORY_FILTER,
      categoryFilter: categoryFilter
    }
    expect(setCategoryFilter(categoryFilter)).toEqual(expectedAction)
  })
  it('should set current user', () => {
    const newUser = 'steve'
    const expectedAction = {
      type: actionTypes.SET_USER,
      user: newUser
    }
    expect(user(newUser)).toEqual(expectedAction)
  })
  
})