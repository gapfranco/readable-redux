import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import mainReducer from './reducers/mainReducer'
import { loadPosts, loadCategories } from './actions/postActions'
import { loadAllComments } from './actions/commentActions'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import 'semantic-ui-css/semantic.min.css'
import './index.css'

// Turn REDUX_DEVTOOLS_EXTENSION on or off
const USE_REDUX_DEVTOOLS = false

// Create store and load initial data
let store
if (USE_REDUX_DEVTOOLS) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  store = createStore(mainReducer, composeEnhancers(applyMiddleware(thunk)))
} else {
  store = createStore(mainReducer, applyMiddleware(thunk))  
}

store.dispatch(loadPosts())
store.dispatch(loadAllComments())
store.dispatch(loadCategories())

// store.subscribe(() => console.log(store.getState()))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter><App /></BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
