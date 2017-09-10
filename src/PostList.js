import React from 'react'
import Post from './Post'
import PostData from './PostData'

const PostList = () => {
  return (
    <div className="main ui text container">
      <div className="ui divided items">
        {PostData.map(post => (
          <Post post={post} key={post.id}></ Post>
        ))}
      </div>
    </div>
  );
}

export default PostList
