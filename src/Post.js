import React from 'react'

const Post = ({post}) => {
  return (
    <div className="item">
      <div className="content">
        <a className="header">{post.name}</a>
        <div className="meta">
          {post.category}
          <div className="ui right floated">
            {post.voteScore}
            <a>
              <i className='large caret up icon' />
            </a>
          </div>
        </div>
        <div className="description">
          <p>{post.body}</p>
        </div>
        <div className="extra">
          <img className="ui avatar image" src={`/images/avatars/${post.author}.jpg`} alt={post.author} />{post.author}
          <span className="ui right floated">3 comments</span>
        </div>
      </div>
    </div>
  )
}

export default Post
