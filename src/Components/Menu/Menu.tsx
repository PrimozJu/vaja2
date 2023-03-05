import React from 'react';
import Ekipa from '../BackendBaje/Ekipa';

interface Props {
  maribor: Ekipa;
}

const Menu: React.FC<Props> = ({ maribor }) => {
  return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '10vh', marginBottom: '1vh' }}>
          <h1 className="text-center display-1">{maribor.ime}</h1>
      </div>
  );
};

export default Menu;