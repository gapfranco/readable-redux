import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import PostForm from './PostForm'
import CommentList from './CommentList'
import { loadComments } from '../actions/commentActions'

const PostEdit = ({match, posts, dispatch}) => {
  const postId = match.params.postId
  dispatch(loadComments(postId))
  let post = posts.find(post => post.id === postId)
  if (typeof post === 'undefined') {
    post = {}
  }  
  return (
    <div>
      <PostForm post={post} />
      <CommentList />
    </div>
  );
}

const mapStateToProps = (state, props) => ({
  posts: state.posts
})

export default withRouter(connect(mapStateToProps)(PostEdit))
