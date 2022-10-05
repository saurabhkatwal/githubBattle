import React, { Component } from 'react'

export default class Card extends Component {
  render() {
    return (
      <div className='card'>
        <h1>{"#"+this.props.index}</h1>
        <img src={this.props.obj.owner.avatar_url} alt="" />
        <h3>{this.props.obj.name}</h3>
        <ul>
          <li><i class="fa-solid fa-user"></i><a href="">{this.props.obj.name}</a></li>
          <li><i class="fa-solid fa-star"></i>{this.props.obj.stargazers_count}</li>
          <li><i class="fa-solid fa-code-fork"></i>{this.props.obj.forks}</li>
          <li><i class="fa-solid fa-triangle-exclamation"></i>{this.props.obj.open_issues}</li>
        </ul>
      </div>
    )
  }
}
