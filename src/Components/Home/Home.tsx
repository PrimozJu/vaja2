import React from 'react';
import Menu from '../Menu/Menu';
import Ekipa from '../BackendBaje/Ekipa';
import { Maribor } from '../BackendBaje/Index';
import Telo from '../Telo/Telo';
import { Igralec, Funkcionar } from '../BackendBaje/Oseba';

import IgralecComp from '../Igralec/Igralec'
import Opozorilo from '../Opozorilo/Opozorilo';
import Info from '../Info/Info';
import Noga from '../Noga/Noga';
interface Props {}

const Home: React.FC<Props> = () => {
  
  const Bojan: Funkcionar = {
    ime: "Buraz",
    priimek: "Buraski",
    letoRojstva: 1999,
    vloga: 'Direktor',
    veljavnost: 2024,
    id: 1
};

const Darko: Funkcionar = {
    ime: "Jovo",
    priimek: "MajkoMilo",
    letoRojstva: 2004,
    vloga: 'Trener',
    veljavnost: 2028,
    id: 2
}

  const Ronaldo: Igralec = {
    ime: "Kristjano",
    priimek: "Ronaldich",
    letoRojstva: 1985,
    visina: 194,
    teza: 79,
    poskodovan: false,
    id: 3
}
const Messi: Igralec = {
  ime: "Lijonel",
  priimek: "Messich",
  letoRojstva: 1989,
  visina: 177,
  teza: 104,
  poskodovan: true,
  id: 4
}
const Neymar: Igralec = {
  ime: "Nejmar",
  priimek: "Neymarich",
  letoRojstva: 1989,
  visina: 190,
  teza: 53,
  poskodovan: false,
  id: 5
}
const Pique: Igralec = {
  ime: "Pike",
  priimek: "Shejkira",
  letoRojstva: 1989,
  visina: 160,
  teza: 63,
  poskodovan: false,
  id: 6
}

const Olimpija: Ekipa = new Ekipa(
  "Nk Olimpija",
  1960,
  Darko,
  Bojan,
  []
);
Olimpija.dodajIgralca(Ronaldo);
Olimpija.dodajIgralca(Messi);
Olimpija.dodajIgralca(Neymar);

  


  return (
    <div>
    <Menu maribor={Olimpija} />
    <Telo maribor={Maribor} />
    {
       Olimpija.igralci.map(igralec => 
        (<IgralecComp key={igralec.id} igralec={igralec}/> )
        ) 
        
    }
    {
      Olimpija.igralci.length  < 11 ? (<Opozorilo/>) : (<Info/>)
    }

    <Noga/>

    

    </div>

  );
};

export default Home;
