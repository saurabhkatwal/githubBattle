import React, { Component } from 'react'

export default class Buttons extends Component {
    changeStyles=(text)=>{
        if(text===this.props.activeButton){
            return {
                color:"rgb(187, 46, 31)",
                fontWeight:"bold"
            }
        }
        else{
          if(this.props.night){
            return {
              color:"#fff"
            }
          }
        }
    }
  render() {
    return (
      <div className='buttons'>
        <a className={this.props.night?("n-t"):("")}onClick={this.props.toggleActive} style={this.changeStyles("all")}>All</a>
        <a onClick={this.props.toggleActive} style={this.changeStyles("javascript")}>JavaScript</a>
        <a onClick={this.props.toggleActive} style={this.changeStyles("ruby")}>Ruby</a>
        <a onClick={this.props.toggleActive} style={this.changeStyles("java")}>Java</a>
        <a onClick={this.props.toggleActive} style={this.changeStyles("css")}>CSS</a>
        <a onClick={this.props.toggleActive} style={this.changeStyles("python")}>Python</a>
        <h3></h3>
      </div>
    )
  }
}
