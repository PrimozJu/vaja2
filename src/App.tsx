import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Routing  from './Components/Routing/Routing';
import Home  from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { teams } from './Components/BackendBaje/Index';
function App() {
  
  const [ekipe, setEkipe] = useState(teams);


  return (
    <div className="App">
       <BrowserRouter> 
      <Navbar ekipe={ekipe} setEkipe={setEkipe}/>
      <Routing/>
       </BrowserRouter>
   </div>
 );
}


 
 
 export default App;
