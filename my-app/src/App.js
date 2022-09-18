import React, { Component } from 'react';
import { Routes, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './layout/header/index';
import { ButtonEcem } from './components/button';
import Login from './components/login';


class App extends Component {
  constructor(){
    super();
    this.state = {
      title: "ecem",
    }
    
  }
  
  async componentDidMount(){
    await fetch("http://localhost:3000/profile", {method:"GET"})
    .then(response => response.json())
    .then(json => this.setState({title:json.username})
    );
  }
  render(){
    return (    
      <React.Fragment>
          <Router>  
              <div>  
              {/* <h1>{this.state.title}</h1> */}
           
              </div>  
              <Login>

              </Login>
              <Routes path="/" component={App} />  
        </Router>  
      </React.Fragment> 
    );
  }
}



export default App;
