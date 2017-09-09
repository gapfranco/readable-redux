import React from 'react'
import Post from './Post'
import posts from './PostData'

function PostList() {
  
  return (
    <div className="main ui text container">
      <div className="ui items">
        {posts.map(post => <Post post={post}></ Post>)}
      </div>
    </div>
  );
}

export default PostList
