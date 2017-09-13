import React, { Component } from 'react'
import { createStore } from 'redux'

import mainReducer from './reducers/mainReducer'
import { addPost, updatePost, votePost, deletePost } from './actions/postActions'

import PostList from './PostList'
import Header from './Header'

import postData from './PostData'

const initialState = {
  posts: [],
  comments: [],
  categoryFilter: '',
  sortPosts: 'BY_VOTE',
  sortComments: 'BY_VOTE'
}

const store = createStore(mainReducer) //, initialState)

console.log(store.getState())

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <PostList />
      </div>
    )
  }
}

export default App
