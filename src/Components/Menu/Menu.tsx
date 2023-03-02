import React from 'react';
import Ekipa from '../BackendBaje/Ekipa';

interface Props {
  maribor: Ekipa;
}

const Menu: React.FC<Props> = ({ maribor }) => {

    /* return (
        <div>
          <h1>{maribor.ime}</h1>
          <ul>
            {maribor.igralci.map(igralec => (
              <li key={igralec.id}>{igralec.ime} {igralec.priimek}</li>
            ))}
          </ul>
        </div>
      ); */
    return(
        <h1>{maribor.ime}</h1>
    )
};

export default Menu;