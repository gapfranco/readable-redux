import React, { Component } from 'react'
import { Label, Button } from 'semantic-ui-react'
import { Form, Input, TextArea, Dropdown } from 'formsy-semantic-ui-react'
import If from '../utils/If';

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { updatePost, deletePost, addPost, votePost, votePostDown } from '../actions/postActions'

class PostForm extends Component {

  constructor (props) {
    super(props)
    // Mark if it's an insert
    if (!props.post.id) {
      this.insert = true
    } else {
      this.insert = false
    }
    // Local state for fields 
    this.state = {
      post: {...props.post},
    }
  }

  votePost = (id) => {
    // Update global state
    this.props.dispatch(votePost(id))
    // Update local state for local display
    this.setState(prevState => ({
      post: {
        ...prevState.post,
        voteScore: prevState.post.voteScore + 1
      }
    }))
  }

  votePostDown = (id) => {
    // Update global state
    this.props.dispatch(votePostDown(id))
    // Update local state to display
    this.setState(prevState => ({
      post: {
        ...prevState.post,
        voteScore: prevState.post.voteScore - 1
      }
    }))
  }

  validSubmit = (form) => {
    if (this.insert) {
      this.props.dispatch(addPost(form.title, form.body, this.props.user, form.category))
    } else {
      this.props.dispatch(updatePost(this.state.post.id, form.title, form.body, form.category))
    }
    this.props.history.push('/')
  }

  clickDelete = (event) => {
    event.preventDefault()
    this.props.dispatch(deletePost(this.state.post.id))
    this.props.history.push('/')
  }

  render() {
    const errorLabel = <Label color="red" pointing/>
    // Makes form read-only if not an insert and different from current user
    let ro = {}
    if (!this.insert && this.props.post.author !== this.props.user) {
      ro = {readOnly: true}
    } 
    return (
      <div className="main ui text container">

        <Form noValidate onValidSubmit={this.validSubmit}>

          <h4 className="ui dividing header">{this.state.post.id ? 'Update Post' : 'New Post'}</h4>
          <Input name="title" label="Title" placeholder="Title" required {...ro}
            value={this.state.post.title}
            validationErrors={{isDefaultRequiredValue: 'Title is required'}} errorLabel={errorLabel} />

          <TextArea name="body" label="Text" placeholder="Text" required {...ro}
            value={this.state.post.body}
            validationErrors={{isDefaultRequiredValue: 'Text is required'}} errorLabel={errorLabel} />

          <If test={ro.readOnly}>
            <Input name="category" {...ro} value={this.state.post.category} />
          </If>
          <If test={!ro.readOnly}>
            <Dropdown name="category" label="Category" placeholder="Select category" search selection required
              value={this.state.post.category}
              validationErrors={{isDefaultRequiredValue: 'Text is required'}} errorLabel={errorLabel}
              options={this.props.categories.map(cat => ({text: cat.name, value: cat.path}))}
            />
          </If>

          {/* If it's an update, shows user, date and vote cont */}
          <If test={!this.insert}>
            <div className="ui item grid">
              <div className="two column row">
                <div className="left floated column">
                  <span className="ui image label item">
                    <img className="ui image" src={`/images/avatars/${this.state.post.author}.jpg`} alt={this.state.post.author} />
                    {this.state.post.author}
                  </span>
                  <span className="ui image label item">
                    <i className="calendar icon"></i>
                    {new Date(this.state.post.timestamp).toLocaleString()}
                  </span>
                </div>
                <div className="right floated right aligned column">
                  <span>
                    {this.state.post.voteScore} <a onClick={() => this.votePost(this.state.post.id)}><i className='chevron up green icon' /></a>
                    <a onClick={() => this.votePostDown(this.state.post.id)}><i className='chevron down red icon' /></a>
                  </span>
                </div>
              </div>
            </div>
          </If>

          {/* Buttons to save or delete */}
          <If test={this.insert || this.props.post.author === this.props.user}>
            <div className="ui list">
              <div className="ui item grid">
                <div className="two column row">
                  <div className="left floated column">
                    <Button primary icon='check' content="Save" />
                  </div>
                  {/* Delete only if it's an update */}
                  <If test={!this.insert}>
                    <div className="right floated right aligned column">
                      <Button color='red' icon='delete' content="Delete" onClick={this.clickDelete}/>
                    </div>
                  </If>
                </div>
              </div>
            </div>
          </If>

        </Form>

      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  categories: state.categories,
  user: state.user
});

export default withRouter(connect(mapStateToProps)(PostForm))
