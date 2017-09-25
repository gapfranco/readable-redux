import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { votePost, votePostDown } from '../actions/postActions'

const Post = ({post, key, votePost, votePostDown, qtd}) => {
  return (
    <div className="item">
      <div className="content">
        <div className="header">
          <Link to={`/post/${post.id}`}>{post.title}</Link>
        </div>
        <div className="meta">
          {post.category}
          <div className="ui right floated">
            {post.voteScore} <a onClick={() => votePost(post.id)}><i className='chevron up green icon' /></a>
            <a onClick={() => votePostDown(post.id)}><i className='chevron down red icon' /></a>
          </div>
        </div>
        <div className="description">
          <p>{post.body}</p>
        </div>
        <div className="extra">
          <span className="ui image label">
            <img className="ui image" src={`/images/avatars/${post.author}.jpg`} alt={post.author} />
            {post.author}
          </span>
          <span className="ui label">
            <i className="calendar icon"></i>
            {new Date(post.timestamp).toLocaleString()}
          </span>
          <span className="ui label basic right floated">
            <i className="comment outline icon"></i>
            {qtd}
          </span>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state, props) => {
  const qtd = state.comments
    .filter(comment => comment.parentId === props.post.id)
    .filter(comment => !comment.deleted)
    .length
  return {qtd: qtd}
}

const mapDispatchToProps = (dispatch) => {
  return {
    votePost: (id) => dispatch(votePost(id)),
    votePostDown: (id) => dispatch(votePostDown(id)),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Post))
