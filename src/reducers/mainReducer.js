import { combineReducers } from 'redux'
import { posts, categories, sortPosts, categoryFilter, user } from './postsReducers'
import { comments, sortComments } from './commentsReducers'

const mainReducer = combineReducers({posts, comments, categories, user, categoryFilter, sortPosts, sortComments})

export default mainReducer
