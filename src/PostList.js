import React from 'react'
import Post from './Post'

const PostList = ({posts, sortPosts, categoryFilter}) => {
  return (
    <div className="main ui text container">
      <div className="ui divided items">
        {[...posts]
          .filter(post => !post.deleted)
          .filter(post => categoryFilter === '' || post.category === categoryFilter)
          .sort((a, b) => sortPosts === 'BY_VOTE' ? b.voteScore - a.voteScore : b.timestamp - a.timestamp)
          .map(post => (
          <Post post={post} key={post.id}></ Post>
        ))}
      </div>
    </div>
  );
}

export default PostList
