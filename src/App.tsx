import React from 'react';
import logo from './logo.svg';
import './App.css';
import Routing  from './Components/Routing/Routing';
import Home  from './Components/Home/Home';

import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routing/>
      </BrowserRouter>
    </div>
  );
}

export default App;
