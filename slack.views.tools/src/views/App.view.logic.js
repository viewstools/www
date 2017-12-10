import App from './App.view.js'
import isValidEmail from '../is-valid-email.js'
import React from 'react'
import subscribe from '../subscribe.js'

export default class AppLogic extends React.Component {
  state = {
    hasBeenInvited: false,
  }

  getInvite = async (event, data) => {
    event.preventDefault()

    const email = data.email.trim()

    if (isValidEmail(email) && !this.state.hasBeenInvited) {
      await subscribe(email)

      this.setState({ hasBeenInvited: true })
    }
  }

  render() {
    return (
      <App
        getInvite={this.getInvite}
        hasBeenInvited={this.state.hasBeenInvited}
      />
    )
  }
}
