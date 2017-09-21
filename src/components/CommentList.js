import React, { Component } from 'react'
import { connect } from 'react-redux'
import Comment from './Comment'
import { Form, Button, Modal } from 'semantic-ui-react'

class CommentList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }

  show = () => this.setState({ open: true })

  close = () => this.setState({ open: false })

  render() {
    return (
      <div className="ui text container">
        <div className="ui four item menu" id="submenu">
          <span className="item"><i className="comment outline icon"></i>Comments</span>
          <a className="item" onClick={this.show}><i className="add icon"></i>New Comment</a>
          <a className="ui simple dropdown item menuItem">
            <i className="sort content descending icon"></i> {this.props.sortComments}
            <div className="menu">
              <div className="item" onClick={() => console.log('Sort by Votes')}>
                Sort by Votes
              </div>
              <div className="item" onClick={() => console.log('Sort by Date/Time')}>
                Sort by Date/Time
              </div>
            </div>
          </a>
          <span className="ui tiny label item">Click on a comment to edit</span>
        </div>
        <div className="ui divided items">
          {this.props.comments
            .filter(comment => comment.parentId === this.props.postId)
            .filter(comment => !comment.deleted)
            .sort((a, b) => this.props.sortComments === 'Sort by Votes' ? b.voteScore - a.voteScore : b.timestamp - a.timestamp)
            .map(comment => (
            <Comment comment={comment} key={comment.id}></ Comment>
          ))}
        </div>

        <Modal size={'small'} dimmer={'inverted'} open={this.state.open} onClose={this.close}>
          <Modal.Header>
            New Comment
          </Modal.Header>
          <Modal.Content>
            <Form>
              <Form.TextArea placeholder='Comment' />
            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={this.close}>
              Close
            </Button>
          </Modal.Actions>
        </Modal>

      </div>
    );
  }

}

const mapStateToProps = (state, props) => ({
  ...state
});

export default connect(mapStateToProps)(CommentList)
