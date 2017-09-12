import React, { Component } from 'react'
import PostList from './PostList'
import Header from './Header'

import postData from './PostData'

const initialState = {
  posts: postData,
  comments: [],
  categoryFilter: '',
  sortPosts: 'BY_VOTE',
  sortComments: 'BY_VOTE'
}


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
