import React, { Component } from 'react'

export default class Buttons extends Component {
    changeStyles=(text)=>{
        if(text===this.props.activeButton){
            return {
                color:"rgb(187, 46, 31)",
                fontWeight:"bold"
            }
        }
    }
  render() {
    return (
      <div className='buttons'>
        <button onClick={this.props.toggleActive} style={this.changeStyles("all")}>All</button>
        <button onClick={this.props.toggleActive} style={this.changeStyles("javascript")}>JavaScript</button>
        <button onClick={this.props.toggleActive} style={this.changeStyles("ruby")}>Ruby</button>
        <button onClick={this.props.toggleActive} style={this.changeStyles("java")}>Java</button>
        <button onClick={this.props.toggleActive} style={this.changeStyles("css")}>CSS</button>
        <button onClick={this.props.toggleActive} style={this.changeStyles("python")}>Python</button>
        <h3></h3>
      </div>
    )
  }
}
