import React from 'react';
import { Routes, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/sectionHeader';
import { ButtonEcem } from './components/parts/button';


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
