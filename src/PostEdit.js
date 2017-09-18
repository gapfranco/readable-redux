import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import PostForm from './PostForm'
import CommentList from './CommentList'

const PostEdit = (props) => {
  const {match, posts} = {...props}
  const postId = match.params.postId
  let post = posts.find(post => post.id === postId)
  if (typeof post === 'undefined') {
    post = {}
  }  
  return (
    <div>
      <PostForm post={post} />
      <CommentList parentId={post.id} />
    </div>
  );
}

const mapStateToProps = (state, props) => ({
  ...state
});

export default withRouter(connect(mapStateToProps)(PostEdit))
