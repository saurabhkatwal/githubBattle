import React, { Component } from 'react'
import "./css/modal.css"
export default class UserModal extends Component {
  render() {
    return (
      <div className='modal'>
        <div className="user-info">
            <div className="img">
            <img src={this.props.userData.avatar_url} alt="" />
            </div>
            <div className="link">
            <a href={this.props.userData.url}>{this.props.userData.name}</a>
            </div>
        </div>
        <div className="button">
        <button>X</button>
        </div>
      </div>
    )
  }
}
