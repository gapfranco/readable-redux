import React, { Component } from 'react'
import { Form, Input, TextArea, Dropdown } from 'formsy-semantic-ui-react'
import { Label, Button } from 'semantic-ui-react'

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { updatePost, addPost } from './actions/postActions'

class PostForm extends Component {
  
  constructor (props) {
    super(props)
    if (!props.post.id) {
      this.insert = true
    } else {
      this.insert = false
    }
    this.state = {
      post: {...props.post},
      categories: props.categories
    }
  }
  
  validSubmit = (form) => {
    console.log(form)
    if (this.insert) {
      this.props.dispatch(addPost(form.title, form.body, this.props.user, form.category))      
    } else {
      this.props.dispatch(updatePost(this.state.post.id, form.title, form.body, form.category))
    }
  }

  render() {
    const errorLabel = <Label color="red" pointing="left"/>
    return (
      <div className="main ui text container">

        <Form noValidate onValidSubmit={this.validSubmit}>

          <h4 className="ui dividing header">{this.state.post.id ? 'Update Post' : 'New Post'}</h4>
          <Input name="title" label="Title" placeholder="Title" required
            value={this.state.post.title}
            validationErrors={{isDefaultRequiredValue: 'Title is required'}} errorLabel={errorLabel} />  
          
          <TextArea name="body" label="Text" placeholder="Text" required
            value={this.state.post.body}
            validationErrors={{isDefaultRequiredValue: 'Text is required'}} errorLabel={errorLabel} />  

          <Dropdown name="category" label="Category" placeholder="Select category" search selection required
            value={this.state.post.category}
            validationErrors={{isDefaultRequiredValue: 'Text is required'}} errorLabel={errorLabel} 
            options={this.state.categories.map(cat => ({text: cat.name, value: cat.path}))}
          />  

          <Button content="Save" /> 
          
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
