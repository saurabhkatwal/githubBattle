import React, { Component } from 'react'
import { Link,Outlet } from 'react-router-dom'
export default class Layout extends Component {
  render() {
    return (
        <>
      <nav>
        <ul>
          <li>
            <Link to="/">Popular</Link>
          </li>
          <li>
            <Link to="/battle">Battle</Link>
          </li>
        </ul>
        <span>Night mode</span>
      </nav>

      <Outlet />
      </>
    )
  }
}
