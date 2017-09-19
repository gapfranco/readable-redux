import React from 'react'
import { Route } from 'react-router-dom';

import PostList from './components/PostList'
import PostEdit from './components/PostEdit'
import PostNew from './components/PostNew'
import Header from './components/Header'

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
