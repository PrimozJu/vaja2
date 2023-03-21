import React from 'react';
import { Link } from 'react-router-dom'; // assuming you are using React Router
import SeznamEkip from '../SeznamEkip/SeznamEkip';
import './NavBar.css'; // import custom CSS file for styling

function NavBar() {
  return (
<div>

    <nav className="navbar navbar-expand-lg navbar-dark bg-black">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">OOORSR vaje</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav"> 
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">Domov</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/novaEkipa">Nova Ekipa</Link>
            </li>
           
          </ul>
        </div>
      </div>
    </nav>
    <SeznamEkip/>
    </div>
  );
}

export default NavBar;
