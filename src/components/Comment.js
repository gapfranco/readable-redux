import React, { Component } from 'react'
import { Form, Button, Modal } from 'semantic-ui-react'
import { connect } from 'react-redux'

import If from '../utils/If';
import { voteComment, updateComment, deleteComment } from '../actions/commentActions'

class Comment extends Component {

  constructor(props) {
    super(props)
    this.state = {
      open: false,
      body: props.comment.body
    }
  }

  show = () => {
    if (this.props.comment.author === this.props.user) {
      this.setState({ open: true })
    }
  }

  close = () => this.setState({ open: false, body: this.props.comment.body })

  changeLocal = (event) => {
    event.preventDefault()
    this.setState({ body: event.target.value })
  }

  save = () => {
    this.props.updateComment(this.props.comment.id, this.state.body)
    this.setState({ open: false })
  }

  render() {
    return (
      <div className="item">
        <div className="content">
          <div className="description">
            <a onClick={this.show} className="comment-body">{this.props.comment.body}</a>
          </div>
          <div className="extra">
            <span className="ui image label">
              <img className="ui image" src={`/images/avatars/${this.props.comment.author}.jpg`} alt={this.props.comment.author} />
              {this.props.comment.author}
            </span>
            <span className="ui label">
              <i className="calendar icon"></i>
              {new Date(this.props.comment.timestamp).toLocaleString()}
            </span>
            <If test={this.props.comment.author === this.props.user}>
              <a className="ui basic label" onClick={() => this.props.deleteComment(this.props.comment.id)}>
                <i className="remove icon"></i>
                Delete comment
              </a>
            </If>
            <span className="ui right floated">
              {this.props.comment.voteScore} <a onClick={() => this.props.voteComment(this.props.comment.id)}>
                {this.props.comment.voteScore > 0
                  ? <i className='star yellow icon' />
                  : <i className='empty star yellow icon' />
                }
              </a>
            </span>
          </div>
        </div>

        <Modal size={'small'} dimmer={'inverted'} open={this.state.open} onClose={this.close}>
          <Modal.Header>
            Comment
          </Modal.Header>
          <Modal.Content>
            <Form>
              <Form.TextArea placeholder='Comment' rows="6" autoFocus onChange={this.changeLocal} value={this.state.body} />
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

    )

  }

}

const mapStateToProps = (state, props) => ({
  user: state.user
});

const mapDispatchToProps = (dispatch) => {
  return {
    voteComment: (id) => dispatch(voteComment(id)),
    updateComment: (id, body) => dispatch(updateComment(id, body)),
    deleteComment: (id) => dispatch(deleteComment(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comment)
