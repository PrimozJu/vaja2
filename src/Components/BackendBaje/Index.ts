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
/* console.log( Maribor); //dodam igralce v Maribor


Maribor.posodobiIgralca(4, Pique); //po posodobitvi igralca
console.log( Maribor)

Maribor.odstraniIgralca(6) //po odstranitvi igralca
console.log( Maribor)

//console.log(Maribor.izpisiPodatke);
const podatki = Maribor.izpisiPodatke();
console.log(podatki); */


export {Maribor}