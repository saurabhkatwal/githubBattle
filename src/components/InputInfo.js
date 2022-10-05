import React, { Component } from 'react'
import Form from './Form'
export default class InputInfo extends Component {
  render() {
    return (
      <div className='input-info'>
        <h1>Players</h1>
        <div className="inputs">
        <div className="input-1 battle-input">
            <Form handleChange={this.props.handleChange} form1Empty={this.props.form1Empty}  player="One"/>
        </div>
        <div className="input-2 battle-input">
            <Form handleChange={this.props.handleChange} form2Empty={this.props.form2Empty}  player="Two"/>
        </div>
        </div>
        
        </div>
    )
  }
}
