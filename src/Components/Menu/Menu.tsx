import React from 'react';
import Ekipa from '../BackendBaje/Ekipa';
import { useState } from 'react';
interface Props {
  ime: String;
}

const Menu: React.FC<Props> = ({ ime }) => {

  return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '10vh', marginBottom: '1vh' }}>
          <h1 className="text-center display-1">{ime}</h1>
      </div>
  );
};

export default Menu;