import React, { Component } from 'react'
import Instructions from './Instructions'
import InputInfo from './InputInfo'
export default class Battle extends Component {
  render() {
    return (
      <div className='battle'>
        <Instructions/>
        <InputInfo handleChange={this.props.handleChange} form1Empty={this.props.form1Empty} form2Empty={this.props.form2Empty} player1={this.props.player1} player2={this.props.player2}/>
      </div>
    )
  }
}
