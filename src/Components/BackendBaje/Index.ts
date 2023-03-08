import {Igralec, Funkcionar} from './Oseba';
import Ekipa from './Ekipa';

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

const Maribor: Ekipa = new Ekipa(
    "Nk Maribor",
    1960,
    Darko,
    Bojan,
    []
);
Maribor.dodajIgralca(Ronaldo);
Maribor.dodajIgralca(Messi);
Maribor.dodajIgralca(Neymar);

const BojanDirektor: Funkcionar = {
    ime: "Buki",
    priimek: "Buraski",
    letoRojstva: 1998,
    vloga: 'Direktor',
    veljavnost: 2024,
    id: 1
};

const MarkoTreener: Funkcionar = {
    ime: "Jovo",
    priimek: "MajkoMilo2",
    letoRojstva: 2003,
    vloga: 'Trener',
    veljavnost: 2028,
    id: 2
}

  const Salah: Igralec = {
  ime: "Mohamed",
  priimek: "Salah",
  letoRojstva: 1992,
  visina: 175,
  teza: 71,
  poskodovan: false,
  id: 10
  }

  const Mbappe: Igralec = {
  ime: "Kylian",
  priimek: "Mbappe",
  letoRojstva: 1998,
  visina: 178,
  teza: 73,
  poskodovan: false,
  id: 11
  }

  const DeBruyne: Igralec = {
  ime: "Kevin",
  priimek: "De Bruyne",
  letoRojstva: 1991,
  visina: 181,
  teza: 68,
  poskodovan: true,
  id: 12
  }

  const VanDijk: Igralec = {
  ime: "Virgil",
  priimek: "Van Dijk",
  letoRojstva: 1991,
  visina: 193,
  teza: 92,
  poskodovan: true,
  id: 13
  }

  const Modric: Igralec = {
  ime: "Luka",
  priimek: "Modric",
  letoRojstva: 1985,
  visina: 172,
  teza: 66,
  poskodovan: false,
  id: 14
  }

  const Kane: Igralec = {
  ime: "Harry",
  priimek: "Kane",
  letoRojstva: 1993,
  visina: 188,
  teza: 86,
  poskodovan: true,
  id: 15
  }

  const Kante: Igralec = {
  ime: "N'Golo",
  priimek: "Kante",
  letoRojstva: 1991,
  visina: 168,
  teza: 70,
  poskodovan: false,
  id: 16
  }
  const Saso: Igralec = {
  ime: "Saso",
  priimek: "Bitkojn",
  letoRojstva: 2009,
  visina: 115,
  teza: 93,
  poskodovan: true,
  id: 17
  }

const Olimpija: Ekipa = new Ekipa(
  "Nk Olimpija",
  1960,
  MarkoTreener,
  BojanDirektor,
  []
);  
Olimpija.dodajIgralca(Ronaldo);
Olimpija.dodajIgralca(Messi);
Olimpija.dodajIgralca(Neymar);
Olimpija.dodajIgralca(Kane);
Olimpija.dodajIgralca(Kante);
Olimpija.dodajIgralca(VanDijk);
Olimpija.dodajIgralca(DeBruyne);
Olimpija.dodajIgralca(Mbappe);
Olimpija.dodajIgralca(Salah);
Olimpija.dodajIgralca(Pique);
Olimpija.dodajIgralca(Saso);

const teams = [Maribor, Olimpija];

export {teams}