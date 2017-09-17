import React from 'react'
import { Route } from 'react-router-dom';

import PostList from './PostList'
import PostEdit from './PostEdit'
import PostNew from './PostNew'
import Header from './Header'

const App = () => {
  return (
    <div>
      <Header />
      <Route exact path="/" render={() => (
        <div>
          <PostList />
        </div>
      )} />
      <Route path="/newpost" render={() => (
        <div>
          <PostNew />
        </div>
      )} />
      <Route path="/post/:postId" render={() => (
        <div>
          <PostEdit />
        </div>
      )} />
    </div>
  )
}

export default App
