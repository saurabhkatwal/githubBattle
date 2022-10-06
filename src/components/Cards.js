import React, { Component } from 'react'
import Card from './Card'
export default class Cards extends Component {
  render() {
   
    return (
      <div className='cards'>
        {this.props.data.map((obj,index)=>{
            return <Card night={this.props.night} obj={obj} index={index+1}/>
        })}
      </div>  )  
    
  }

}