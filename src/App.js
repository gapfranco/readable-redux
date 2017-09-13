import React, { Component } from 'react'

import PostList from './PostList'
import Header from './Header'

class App extends Component {

  constructor (props) {
    super(props)
    this.state = props.store.getState()
  }

  componentDidMount () {
    const { store } = this.props
    this.unsubscribe = store.subscribe(() =>
      this.setState({...store.getState()})
    )
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  render(store) {
    return (
      <div>
        <Header />
        <PostList {...this.state}/>
      </div>
    )
  }
}

export default App
