import React from 'react';
import Menu from '../Menu/Menu';
import Ekipa from '../BackendBaje/Ekipa';
import { teams } from '../BackendBaje/Index';
import Telo from '../Telo/Telo';
import { Igralec, Funkcionar } from '../BackendBaje/Oseba';

import IgralecComp from '../Igralec/Igralec';
import Opozorilo from '../Opozorilo/Opozorilo';
import Info from '../Info/Info';
import Noga from '../Noga/Noga';
import { useParams } from 'react-router-dom';

interface Props {}

const Home: React.FC<Props> = () => {
  const { ime } = useParams(); //iz urlja vzame ime ekipe

  console.log("trenutno si na " + ime);

  const izbrana_ekipa = teams.find((ekipa) => ekipa.ime === ime);

  if (!izbrana_ekipa) {
    return <div>Error: ekipa not found</div>;
  }

  return (  
    <div>
      <Menu ime={izbrana_ekipa.ime} />
      <Telo kera_ekipa={izbrana_ekipa} />
      {izbrana_ekipa?.igralci.map((igralec) => (
        <IgralecComp key={igralec.id} igralec={igralec} />
      ))}
      {izbrana_ekipa.igralci.length < 11 ? <Opozorilo /> : <Info />}
      ({izbrana_ekipa.igralci.length})

      <Noga />
    </div>
  );
};

export default Home;
