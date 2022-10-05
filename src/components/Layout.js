import React, { Component } from 'react'
import { Link,Outlet } from 'react-router-dom'
export default class Layout extends Component {
  render() {
    return (
        <>
      <nav className='nav1'>
        <ul>
          <li>
            <Link to="/">Popular</Link>
          </li>
          <li>
            <Link to="/battle">Battle</Link>
          </li>
        </ul>
        <div className='night'><i class="fa-solid fa-lightbulb fa-2x"></i></div>
      </nav>

      <Outlet />
      </>
    )
  }
}
