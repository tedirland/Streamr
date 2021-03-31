import React, { Component } from 'react'

export default class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId:
          '949087102501-ghaeqi93sdgeupsgd4c8v9r4ho152ji9.apps.googleusercontent.com',
        scope: 'email',
      })
    })
  }
  render() {
    return <div>Google Auth</div>
  }
}
