  import React, { useState } from 'react';
  //import Ekipa from '../BackendBaje/Ekipa';
  import { teams } from '../BackendBaje/Index';
  import { Link } from 'react-router-dom';
  interface Props {
    //  kera_ekipa: Ekipa;
  }

  const SeznamEkip = () => {
      const [ekipe, setEkipe] = useState(teams);
      return (
          <div>
              <ul>
                  {ekipe.map((ekipa) => (
                      <li key={ekipa.ime}>
            <Link to={`/${ekipa.ime}`}>{ekipa.ime}</Link>
                        </li>
                  ))}
              </ul>
          </div>
      );
    
  };

  export default SeznamEkip;