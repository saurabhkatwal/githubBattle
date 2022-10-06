import React, { Component } from 'react'
import Form from './Form'
import UserModal from './UserModal'
export default class InputInfo extends Component {
  render() {
    return (
      <div className='input-info'>
        <h1>Players</h1>
        <div className="inputs">
        <div className="input-1 battle-input">
          {this.props.displayModal1?<UserModal modalNo="One" removeModal={this.props.removeModal} userData={this.props.user1Obj}/>:<Form submitHandler={this.props.submitHandler} handleChange={this.props.handleChange} form1Empty={this.props.form1Empty}  player="One"/>}
        </div>
        <div className="input-2 battle-input">
          {this.props.displayModal2?<UserModal modalNo="Two" removeModal={this.props.removeModal} userData={this.props.user2Obj}/>:<Form submitHandler={this.props.submitHandler} handleChange={this.props.handleChange} form2Empty={this.props.form2Empty}  player="Two"/>}
        </div>
        </div>
        {this.props.displayModal1&&this.props.displayModal2?<div className='battle-btn'><a>Battle</a></div>:""}
        </div>
    )
  }
}
