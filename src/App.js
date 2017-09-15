import React from 'react'
import { Route } from 'react-router-dom';

import PostList from './PostList'
import PostEdit from './PostEdit'
import Header from './Header'

const App = () => {
  return (
    <div>
      <Route exact path="/" render={() => (
        <div>
          <Header />
          <PostList />
        </div>
      )} />
      <Route path="/post/:postId" render={() => (
        <div>
          <Header />
          <PostEdit />
        </div>
      )} />
    </div>
  )
}

export default App
