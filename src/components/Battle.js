import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'
import Instructions from './Instructions'
import InputInfo from './InputInfo'
export default class Battle extends Component {
  render() {
    return (
      <div className={this.props.night?("battle night"):("battle")}>
        <Instructions night={this.props.night}/>
        <InputInfo
        night={this.props.night} 
        removeModal={this.props.removeModal}
        user1Obj={this.props.user1Obj} 
        user2Obj={this.props.user2Obj} 
        displayModal1={this.props.displayModal1} 
        displayModal2={this.props.displayModal2} 
        form1Data={this.props.form1Data} 
        form2Data={this.props.form2Data} 
        submitHandler={this.props.submitHandler} 
        handleChange={this.props.handleChange} 
        form1Empty={this.props.form1Empty} 
        form2Empty={this.props.form2Empty} 
        player1={this.props.player1} 
        player2={this.props.player2}/>
        <Outlet/>
      </div>
    )
  }
}
