import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import PostForm from './PostForm'

const PostEdit = (props) => {
  const {match, posts, comments} = {...props}
  const postId = match.params.postId
  let post = posts.find(post => post.id === postId)
  if (typeof post === 'undefined') {
    post = {}
  }  
  return (
    <PostForm post={post} />
  );
}

const mapStateToProps = (state, props) => ({
  ...state
});

export default withRouter(connect(mapStateToProps)(PostEdit))
