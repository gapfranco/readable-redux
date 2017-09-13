import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import mainReducer from './reducers/mainReducer'
import { addPost, deletePost, votePost, sortPosts, categoryFilter } from './actions/postActions'

import 'semantic-ui-css/semantic.min.css'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

const store = createStore(mainReducer)

store.subscribe(() => console.log(store.getState()))

setTimeout(() => store.dispatch(addPost('TESTE 1', 'Corpo do teste 1', 'matthew', 'redux')), 1000)
setTimeout(() => store.dispatch(addPost('TESTE 2', 'Corpo do teste 2', 'justen', 'react')), 2000)
setTimeout(() => store.dispatch(addPost('TESTE 3', 'Corpo do teste 3', 'daniel', 'redux')), 3000)
setTimeout(() => store.dispatch(addPost('TESTE 4', 'Corpo do teste 4', 'molly', 'redux')), 4000)

// setTimeout(() => store.dispatch(votePost(store.getState().posts[2].id)), 6000)
// setTimeout(() => store.dispatch(votePost(store.getState().posts[2].id)), 8000)
// setTimeout(() => store.dispatch(votePost(store.getState().posts[3].id)), 10000)

// setTimeout(() => store.dispatch(sortPosts('BY_DATE')), 12000)
// setTimeout(() => store.dispatch(sortPosts('BY_VOTE')), 15000)
// setTimeout(() => store.dispatch(categoryFilter('react')), 17000)
// setTimeout(() => store.dispatch(categoryFilter('')), 19000)


ReactDOM.render(
  <App store={store}/>,
  document.getElementById('root')
)

registerServiceWorker()
