import { sortComments } from '../actions/commentActions'
import actionTypes from '../actions/actionTypes'

describe('actions', () => {
  it('should create an action to sort comments', () => {
    const sortBy = 'Sort by Vote'
    const expectedAction = {
      type: actionTypes.SORT_COMMENTS,
      sortBy: sortBy
    }    
    expect(sortComments(sortBy)).toEqual(expectedAction)
  })
  
})