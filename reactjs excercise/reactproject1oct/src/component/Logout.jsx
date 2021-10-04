import React, { Component } from 'react'
export default class UserLogout extends Component {
 
 logout = () => {
    localStorage.clear();

    window.location.href = "/Signup";
  }
 
  render() {
    return (
      <button onClick={this.logout}>Logout</button>
    )
  }
}