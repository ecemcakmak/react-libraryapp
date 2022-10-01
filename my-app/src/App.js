import React  from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import './assets/fonts/izmir/fonts.css';
import Profile from'./pages/profile';
import KitapListe from'./pages/kitapliste';
import Login from './components/login';

 


function App() {
    return (    
      <React.Fragment>
                    <Routes>
                        <Route path='/' element={<Login />}  />
                        <Route path='/profile' element={<Profile />}  />
                        <Route path='/kitapliste' element={<KitapListe />}  />
                    </Routes>
           
      </React.Fragment> 
    );
  
}



export default App;
