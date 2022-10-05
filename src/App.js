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
      fetcheddata:[]
    }
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
            <Route path="battle" element={<Battle/>}/>
            <Route path="*" element={<NoPage/>}/>
          </Route>
        </Routes>
      </>
    )
  }
}
