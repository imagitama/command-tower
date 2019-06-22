import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import firebase from 'firebase/app'
import ReactReduxFirebaseProvider from 'react-redux-firebase/lib/ReactReduxFirebaseProvider'
import { ThemeProvider } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core/styles'
import store, { history } from './store'
import App from './app'
import './global.css'

const target = document.querySelector('#root')

const rrfProps = {
  firebase,
  config: {
    userProfile: 'users'
  },
  dispatch: store.dispatch
}

const theme = createMuiTheme({
  typography: {
    fontFamily: '"Roboto", sans-serif'
  }
})

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </ReactReduxFirebaseProvider>
    </ConnectedRouter>
  </Provider>,
  target
)
