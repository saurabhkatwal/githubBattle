import React, { Component } from 'react'

export default class NoPage extends Component {
  render() {
    return (
      <div className={this.props.night?("nopage night"):("nopage")}>
        <h1>No such route</h1>
      </div>
    )
  }
}
