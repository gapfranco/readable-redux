import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const PostEdit = (props) => {
  const {match, posts, comments} = {...props}
  const postId = match.params.postId
  let post
  if (postId === 'new') {
    post = {}
  } else {
    post = posts.find(post => post.id === postId)
    if (typeof post === 'undefined') {
      post = {}
    }  
  }
  return (
    <div className="main ui text container">
      <pre>{JSON.stringify(post, null, 2)}</pre>
    </div>
  );
}

const mapStateToProps = (state, props) => ({
  ...state
});

export default withRouter(connect(mapStateToProps)(PostEdit))
