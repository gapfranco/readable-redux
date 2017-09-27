import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Post from './Post'

const PostList = ({match, posts, sortPosts, dispatch}) => {
  const {categoryId} = match.params
  let categoryFilter = ''
  if (!!categoryId) {
    categoryFilter = categoryId
  }  
  return (
    <div className="main ui text container">
      <div className="ui divided items">
        {[...posts]
          .filter(post => !post.deleted)
          .filter(post => categoryFilter === '' || post.category === categoryFilter)
          .sort((a, b) => sortPosts === 'Sort by Votes' ? b.voteScore - a.voteScore : b.timestamp - a.timestamp)
          .map(post => (
          <Post post={post} key={post.id}></ Post>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state, props) => ({
  ...state
});

export default withRouter(connect(mapStateToProps)(PostList))
