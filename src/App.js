import './App.css';
import React, { Component } from 'react'
import {Routes,Route} from "react-router-dom"
import Layout from './components/Layout';
import Popular from './components/Popular';
import Battle from './components/Battle';
import Result from './components/Result';
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
      form2Data:"",
      displayModal1:false,
      displayModal2:false,
      user1Obj:{},
      user2Obj:{},
      user1Score:(Math.random()*10>4)
    }
  }
  fetchUser=async(userName)=>{
    console.log(userName)
    let response=await fetch(`https://api.github.com/users/${userName}`)
    let data=await response.json();
    return data;
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
        this.setState({form1Empty:false});
        this.setState({form1Data:e.target.value});
        
      }
      else{
        this.setState({form2Empty:false})
        this.setState({form2Data:e.target.value})
      }
    }}

    submitHandler=async(e)=>{
      e.preventDefault();
      console.log(e.target.className);
      let formName=e.target.className;
      if(formName==="One"){
        console.log(this.state.form1Data);
        let user1data=await this.fetchUser(this.state.form1Data);
        console.log(user1data)
        this.setState({user1Obj:user1data})
        this.setState({displayModal1:true})
      }
      else{
        console.log(this.state.form2Data);
        let user2data= await this.fetchUser(this.state.form2Data);
        this.setState({user2Obj:user2data})
        this.setState({displayModal2:true})
      }
    }
  toggleActive=(e)=>{
    this.fetchData(e.target.textContent.toLowerCase())
    this.setState({activeButton:e.target.textContent.toLowerCase()})
}
fetchData=(language)=>{
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
removeModal=(e,modalNo)=>{
if(modalNo==="One"){
  this.setState({displayModal1:false})
  this.setState({user1Obj:{}})
  this.setState({form1Data:""})
  this.setState({form1Empty:true})
}
else{
  this.setState({displayModal2:false})
  this.setState({user2Obj:{}})
  this.setState({form2Data:""})
  this.setState({form2Empty:true})
}
}
resetData=()=>{
this.setState({user1Obj:{}})
this.setState({user2Obj:{}})
this.setState({displayModal1:false})
this.setState({displayModal2:false})
this.setState({form1Data:""})
this.setState({form2Data:""})
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
            <Route path="battle" element={<Battle removeModal={this.removeModal} user1Obj={this.state.user1Obj} user2Obj={this.state.user2Obj} displayModal1={this.state.displayModal1} displayModal2={this.state.displayModal2} submitHandler={this.submitHandler} handleChange={this.handleChange}form1Empty={this.state.form1Empty} form2Empty={this.state.form2Empty} player1={this.state.player1} player2={this.state.player2}/>}/>
            <Route path="results" element={<Result resetData={this.resetData} user1Score={this.state.user1Score} user1Obj={this.state.user1Obj} user2Obj={this.state.user2Obj}/>}/>
            <Route path="*" element={<NoPage/>}/>
          </Route>
        </Routes>
      </>
    )
  }
}
// form1Data={this.state.form1Data} form2Data={this.state.form2Data}