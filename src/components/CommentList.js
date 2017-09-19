import React from 'react'
import { connect } from 'react-redux'
import Comment from './Comment'

const CommentList = ({comments, sortComments}) => {
  return (
    <div className="ui text container">
      <h4 className="ui horizontal divider header">
        <i className="comment outline icon"></i>
        Comments
      </h4>
      <div className="ui secondary  menu">
        <a className="item">
          <i className="add icon"></i> New Comment
        </a>
        <a className="ui simple dropdown item menuItem">
          <i className="sort content descending icon"></i> {sortComments}
          <div className="menu">
            <div className="item" onClick={() => console.log('Sort by Votes')}>
              Sort by Votes
            </div>
            <div className="item" onClick={() => console.log('Sort by Date/Time')}>
              Sort by Date/Time
            </div>
          </div>
        </a>
      </div>
      <div className="ui divided items">
        {[...comments]
          .filter(comment => !comment.deleted)
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
