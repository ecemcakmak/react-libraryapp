import React  from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Profile from './pages/profile';
import Login from './components/login';

 


function App() {
    return (    
      <React.Fragment>
                    <Routes>
                        <Route path='/login' element={<Login />}  />
                        <Route path='/profile' element={<Profile />}  />
                    </Routes>
           
      </React.Fragment> 
    );
  
}



export default App;
