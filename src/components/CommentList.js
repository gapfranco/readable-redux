import React, { Component } from 'react'
import { connect } from 'react-redux'
import Comment from './Comment'
import { Form, Button, Modal } from 'semantic-ui-react'

import { addComment, sortComments } from '../actions/commentActions'

class CommentList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      open: false,
      body: ''
    }
  }

  show = () => this.setState({ open: true })

  close = () => this.setState({ open: false })

  changeLocal = (event) => {
    event.preventDefault()
    this.setState({ body: event.target.value })
  }

  save = () => {
    this.props.dispatch(addComment(this.props.postId, this.state.body, this.props.user))
    this.setState({ open: false })
  }

  render() {
    return (
      <div className="ui text container">
        <div className="ui four item menu" id="submenu">
          <span className="item"><i className="comment outline icon"></i>{this.props.qtd} Comments</span>
          <a className="item" onClick={this.show}><i className="add icon"></i>New Comment</a>
          <a className="ui simple dropdown item menuItem">
            <i className="sort content descending icon"></i> {this.props.sortComments}
            <div className="menu">
              <div className="item" onClick={() => this.props.dispatch(sortComments('Sort by Votes'))} >
                Sort by Votes
              </div>
              <div className="item" onClick={() => this.props.dispatch(sortComments('Sort by Date/Time'))}>
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
              <Form.TextArea placeholder='Comment' rows="6" autoFocus onChange={this.changeLocal} />
            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button className={`ui button ${this.state.body !== '' ? 'primary' : 'disabled'}`} onClick={this.save}>
              Save
            </Button>
            <Button onClick={this.close}>
              Close
            </Button>
          </Modal.Actions>
        </Modal>

      </div>
    );
  }

}

const mapStateToProps = (state, props) => {
  const qtd = state.comments
  .filter(comment => comment.parentId === props.postId)
  .length
  return {...state, qtd: qtd}
}  

export default connect(mapStateToProps)(CommentList)
