import React, { Component } from 'react'

import { Form, Button, Modal } from 'semantic-ui-react'

import { connect } from 'react-redux'
import { voteComment } from '../actions/commentActions'

class Comment extends Component {

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
      <div className="item">
        <div className="content">
          <div className="description">
            <a onClick={this.show}>{this.props.comment.body}</a>
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
            <a className="ui basic label">
              <i className="remove icon"></i>
              Delete comment
            </a>
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
              <Form.TextArea placeholder='Comment' value={this.props.comment.body} />
            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={this.close}>
              Close
            </Button>
          </Modal.Actions>
        </Modal>

      </div>

    )

  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    voteComment: (id) => dispatch(voteComment(id))
  }
}

export default connect(null, mapDispatchToProps)(Comment)
