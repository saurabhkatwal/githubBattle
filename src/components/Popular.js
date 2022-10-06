import React, { Component } from 'react'
import Buttons from './Buttons'
import Content from './Content'
export default class Popular extends Component {
  render() {
    return (
      <div style={this.props.night?{backgroundColor:"#000"}:{}}className="popular">
        <Buttons night={this.props.night} toggleActive={this.props.toggleActive} activeButton={this.props.activeButton}/>
        <Content night={this.props.night} data={this.props.data}/>
      </div>
    )
  }
}
