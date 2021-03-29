import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import "./styles/styles.scss"
import store from './redux/Store'
import { Provider } from 'react-redux'
import {getAllSpecialities} from './redux/ActionCreators'

store.dispatch(getAllSpecialities())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
