import React, { Component } from 'react'
import { NavLink,Outlet } from 'react-router-dom'
export default class Layout extends Component {
  NavLinkStyles=({isActive})=>{
    return {
      fontWeight:isActive?"bold":"normal",
      color:isActive?"rgb(187, 46, 31)":"#000"
    }
  }
  render() {
    return (
        <>
      <nav className='nav1'>
        <ul>
          <li>
            <NavLink style={this.NavLinkStyles}to="/">Popular</NavLink>
          </li>
          <li>
            <NavLink style={this.NavLinkStyles}to="/battle">Battle</NavLink>
          </li>
        </ul>
        <div className='night' onClick={this.props.nightMode}><i style={this.props.night?{color:"yellow"}:{color:""}}class="fa-solid fa-lightbulb fa-2x"></i></div>
      </nav>

      <Outlet />
      </>
    )
  }
}
