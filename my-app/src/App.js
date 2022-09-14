import React from 'react';
import { Routes, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './layout/header/index';
import { ButtonEcem } from './components/button';


function App() {
  return (    
    <React.Fragment>
        <Router>  
            <div>  
            <h1>ecem</h1>
            <Navbar/>      
                <ButtonEcem>
                  ecemişko
                </ButtonEcem>      
            </div>  
            <Routes path="/" component={App} />  
      </Router>  
    </React.Fragment> 
  );
}

export default App;
