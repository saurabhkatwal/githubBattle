import React, { Component } from 'react'

export default class Instructions extends Component {
  render() {
    return (
      <div className={this.props.night?("instructions night"):("instructions")}>
        <h1>Instructions</h1>
        <div className="instruction-cards">
            <div className="instruction-card">
            <i style={{color:"rgb(255, 191, 116)"}}class="fa-solid fa-users fa-8x"></i>
            </div>
            <div className="instruction-card">
            <i style={{color: "rgb(114, 114, 114)"}}class="fa-solid fa-jet-fighter fa-8x"></i>
            </div>
            <div className="instruction-card">
            <i style={{color:"rgb(255, 215, 0)"}}class="fa-solid fa-trophy fa-8x"></i>
            </div>
        </div>
      </div>
    )
  }
}
