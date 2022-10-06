import React, { Component } from 'react'
import Cards from "./Cards"
export default class Content extends Component {
  render() {
    return (
      <div className='content'>
        {/* {console.log(this.props.data)} */}
        <Cards night={this.props.night} data={this.props.data}/>
      </div>
    )
  }
}
