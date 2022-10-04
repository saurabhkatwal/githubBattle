import './App.css';
import React, { Component } from 'react'
import {Routes,Route} from "react-router-dom"
import Layout from './components/Layout';
import Popular from './components/Popular';
import Battle from './components/Battle';
import NoPage from './components/NoPage';
export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      activeButton:"all"
    }
  }
  toggleActive=(e)=>{
    this.setState({activeButton:e.target.textContent.toLowerCase()})
}
  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Popular activeButton={this.state.activeButton} toggleActive={this.toggleActive}/>}/>
            <Route path="battle" element={<Battle/>}/>
            <Route path="*" element={<NoPage/>}/>
          </Route>
        </Routes>
      </>
    )
  }
}
