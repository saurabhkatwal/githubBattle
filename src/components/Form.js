import React, { Component } from 'react'

export default class Form extends Component {
    // handleSubmit=(e)=>{
    //   e.preventDefault();

    // }
    
  render() {
    return (
      <div className='form'>
        <form onSubmit={this.props.submitHandler} className={this.props.player} action="">
            <label htmlFor="">Player {this.props.player}</label>
            <div className="form-input">
            <input onChange={this.props.handleChange} type="text" placeholder='github username'/>
            <button disabled={this.props.form1Empty||this.props.form2Empty} type="submit">Submit</button>
            </div>
        </form>
      </div>
    )
  }
}
