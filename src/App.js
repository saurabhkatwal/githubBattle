import './App.css';
import React, { Component } from 'react'
import {Routes,Route} from "react-router-dom"
import Layout from './components/Layout';
import Popular from './components/Popular';
import Battle from './components/Battle';
import NoPage from './components/NoPage';
import fetch from 'node-fetch';
export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      activeButton:"all",
      fetcheddata:[],
      player1:"",
      player2:"",
      form1Empty:true,
      form2Empty:true,
      form1Data:"",
      form2Data:""
    }
  }
  handleChange=(e)=>{
    let formName=e.target.parentElement.parentElement.className;
    console.log(formName)
    if(e.target.value===""){
      if(formName==="One"){
        this.setState({form1Empty:true})
        this.setState({form1Data:""})}
      else{
      this.setState({form2Empty:true})
      this.setState({form2Data:""})
      }
    }
    else{
      if(formName==="One"){
        this.setState({form1Empty:false})
        this.setState({form1Data:e.target.value})
      }
      else{
        this.setState({form2Empty:false})
        this.setState({form2Data:e.target.value})
      }
    }}

    submitHandler=(e)=>{
      e.preventDefault();
      console.log(e.target.className)
      console.log(e.target)
    }
  toggleActive=(e)=>{
    this.fetchData(e.target.textContent.toLowerCase())
    this.setState({activeButton:e.target.textContent.toLowerCase()})
}
fetchData=async(language)=>{
  fetch(`https://api.github.com/search/repositories?q=stars:%3E1+language:${language}&sort=stars&order=desc&type=Repositories`)
  .then(res=>res.json())
  .then(data=>{
    if(!data.items){
      throw new Error(data.message);
    }
    console.log(data.items)
    this.setState({fetcheddata:data.items})
  })
}

componentDidMount(){
this.fetchData(this.state.activeButton)
}
  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Popular activeButton={this.state.activeButton} toggleActive={this.toggleActive} data={this.state.fetcheddata}/>}/>
            <Route path="battle" element={<Battle submitHandler={this.submitHandler} handleChange={this.handleChange}form1Empty={this.state.form1Empty} form2Empty={this.state.form2Empty} player1={this.state.player1} player2={this.state.player2}/>}/>
            <Route path="*" element={<NoPage/>}/>
          </Route>
        </Routes>
      </>
    )
  }
}
