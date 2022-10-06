import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
export default class Result extends Component {
  render() {
    return (
        <>
      <div class="result" style={this.props.night?{backgroundColor:"#000",color:"#fff"}:{}}>
        <div className="user-1">
            <div className="compCard">
            <h1>{this.props.user1Score?"winner":"loser"}</h1>
            <div className="user-img">
            <img src={this.props.user1Obj.avatar_url} alt="" />
            </div>
            <a href={this.props.user1Obj.url}>{this.props.user1Obj.login}</a>
            <ul>
                <li><i class="fa-solid fa-user"></i>{this.props.user1Obj.name}</li>
                <li><i class="fa-solid fa-users"></i>{this.props.user1Obj.followers} followers</li>
                <li><i class="fa-solid fa-globe"></i>{this.props.user1Obj.following} following</li>
                <li><i class="fa-solid fa-file"></i>{this.props.user1Obj.public_repos} repositories</li>
            </ul>
            </div>
        </div>
        <div className="user-2">
        <div className="compCard">
        <h1>{this.props.user1Score?"loser":"winner"}</h1>
        <div className="user-img">
        <img src={this.props.user2Obj.avatar_url} alt="" />
        </div>
            <a href={this.props.user2Obj.url}>{this.props.user2Obj.login}</a>
            <ul>
                <li><i class="fa-solid fa-user"></i>{this.props.user2Obj.name}</li>
                <li><i class="fa-solid fa-users"></i>{this.props.user2Obj.followers} followers</li>
                <li><i class="fa-solid fa-globe"></i>{this.props.user2Obj.following} following</li>
                <li><i class="fa-solid fa-file"></i>{this.props.user2Obj.public_repos} repositories</li>
            </ul>
        </div>
        </div>
      </div>
      <div className="reset-btn">
        <NavLink to="/battle" onClick={this.props.resetData}>Reset</NavLink>
      </div>
      </>
    )
  }
}
