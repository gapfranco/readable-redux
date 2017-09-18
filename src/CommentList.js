import React from 'react'
import { connect } from 'react-redux'
import Comment from './Comment'

const CommentList = ({parentId, comments, sortComments}) => {
  return (
    <div className="ui text container">
      <h4 className="ui horizontal divider header">
        <i className="comment icon"></i>
        Comments
      </h4>
      <div className="ui divided items">
        {[...comments]
          .filter(comment => comment.parentId === parentId && !comment.deleted)
          .sort((a, b) => sortComments === 'Sort by Votes' ? b.voteScore - a.voteScore : b.timestamp - a.timestamp)
          .map(comment => (
          <Comment comment={comment} key={comment.id}></ Comment>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state, props) => ({
  ...state
});

export default connect(mapStateToProps)(CommentList)
