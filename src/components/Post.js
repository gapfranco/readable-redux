import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { votePost } from '../actions/postActions'
import { withRouter } from 'react-router-dom'

const Post = ({post, key, votePost}) => {
  return (
    <div className="item">
      <div className="content">
        <div className="header">
          <Link to={`/post/${post.id}`}>{post.title}</Link>
        </div>
        <div className="meta">
          {post.category}
          <div className="ui right floated">
            {post.voteScore} <a onClick={() => votePost(post.id)}>
              {post.voteScore > 0 
                ? <i className='star yellow icon' />
                : <i className='empty star yellow icon' />
              }
            </a>
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
            3
          </span>
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    votePost: (id) => dispatch(votePost(id))
  }
}

export default withRouter(connect(null, mapDispatchToProps)(Post))
