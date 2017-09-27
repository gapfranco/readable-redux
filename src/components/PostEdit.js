import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import PostForm from './PostForm'
import CommentList from './CommentList'

const PostEdit = ({match, posts, dispatch}) => {
  const {postId} = match.params
  let post = posts.find(post => post.id === postId)
  /**
   * If post (asynchronous) has not arrived: shows message
   * When arrived: shows form and comments
   */
  if (typeof post === 'undefined') {
    return (
      <div>
        <h2>Aguarde...</h2>
      </div>
    );
  } else {
    return (
      <div>
        <PostForm post={post} />
        <CommentList postId={post.id}/>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  posts: state.posts
})

export default withRouter(connect(mapStateToProps)(PostEdit))
