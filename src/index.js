import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import mainReducer from './reducers/mainReducer'
import { addPost } from './actions/postActions'

import 'semantic-ui-css/semantic.min.css'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

const store = createStore(mainReducer)

store.dispatch(addPost('TESTE 1', 'Corpo do teste 1', 'matthew', 'redux'))
store.dispatch(addPost('TESTE 2', 'Corpo do teste 2', 'justen', 'react'))
store.dispatch(addPost('TESTE 3', 'Corpo do teste 3', 'daniel', 'redux'))
store.dispatch(addPost('TESTE 4', 'Corpo do teste 4', 'molly', 'redux'))

store.subscribe(() => console.log(store.getState()))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
