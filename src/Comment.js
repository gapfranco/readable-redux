import React from 'react'
import { connect } from 'react-redux'
import { voteComment } from './actions/commentActions'

const Comment = ({comment, key, voteComment}) => {
  return (
    <div className="item">
      <div className="content">
        <div className="header">
          {comment.title}
        </div>
        <div className="meta">
          <div className="ui right floated">
            {comment.voteScore} <a onClick={() => voteComment(comment.id)}>
              {comment.voteScore > 0 
                ? <i className='star yellow icon' />
                : <i className='empty star yellow icon' />
              }
            </a>
          </div>
        </div>
        <div className="description">
          <p>{comment.body}</p>
        </div>
        <div className="extra">
          <span className="ui image label">
            <img className="ui image" src={`/images/avatars/${comment.author}.jpg`} alt={comment.author} />
            {comment.author}
          </span>
          <span className="ui label">
            <i className="calendar icon"></i>
            {new Date(comment.timestamp).toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    voteComment: (id) => dispatch(voteComment(id))
  }
}

export default connect(null, mapDispatchToProps)(Comment)
