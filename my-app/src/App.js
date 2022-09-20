import React  from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ButtonEcem } from './components/button';
import Home from './pages/home';
import Pricing from './pages/pricing';
import About from './pages/about';
import Login from './components/login';
import Navbar from './components/navbar';
 


function App() {
  // constructor(){
  //   super();
  //   this.state = {
  //     title: "ecem",
  //   }
    
  // }
  
  // async componentDidMount(){
  //   await fetch("http://localhost:3000/profile", {method:"GET"})
  //   .then(response => response.json())
  //   .then(json => this.setState({title:json.username})
  //   );
  // }

 
    return (    
      <React.Fragment>
              <Login/>
              <Navbar/>
              <div className='container'>
                    <Routes>
                      <Route path='/' element={<Home />}  />
                      <Route path='/pricing' element={<Pricing />}  />
                      <Route path='/about' element={<About />}  />
                    </Routes>
              </div>
      </React.Fragment> 
    );
  
}



export default App;
