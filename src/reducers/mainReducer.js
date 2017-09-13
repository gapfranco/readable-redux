import { combineReducers } from 'redux'
import { posts, sortPosts, categoryFilter } from './postsReducers'
import { comments, sortComments } from './commentsReducers'

const mainReducer = combineReducers({posts, comments, categoryFilter, sortPosts, sortComments})

export default mainReducer
