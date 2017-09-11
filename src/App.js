import React, { Component } from 'react'
import PostList from './PostList'
import Header from './Header'

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
