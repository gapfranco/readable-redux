import React from 'react'
import { connect } from 'react-redux'
import { votePost } from './actions/postActions'

const Post = ({post, key, votePost}) => {
  return (
    <div className="item">
      <div className="content">
        <a className="header">{post.title}</a>
        <div className="meta">
          {post.category}
          <div className="ui right floated">
            {post.voteScore}
            <a onClick={() => votePost(post.id)}>
              <i className='large caret up icon' />
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

export default connect(null, mapDispatchToProps)(Post)
