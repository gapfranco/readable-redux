import React from 'react';

function Post({post}) {
  return (
    <div className="item">
      <div className="content">
        <a className="header">{post.name}</a>
        <div class="meta">{post.category}</div>
        <div className="description">
          <p>{post.description}</p>
        </div>
        <div className="extra">
          <img className="ui avatar image" src={`/images/avatars/${post.author}.jpg`} alt={post.author} />{post.author}
        </div>
      </div>
    </div>
  );
}

export default Post;
