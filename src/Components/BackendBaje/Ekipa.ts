import { Igralec, Funkcionar } from './Oseba';

class Ekipa {
    ime: string;
    letoUstanovitve: number;
    direktor: Funkcionar;
    trener: Funkcionar;
    igralci: Igralec[];

    constructor(
        ime: string,
        letoUstanovitve: number,
        direktor: Funkcionar,
        trener: Funkcionar,
        igralci: Igralec[]
    ) {
        this.ime = ime;
        this.letoUstanovitve = letoUstanovitve;
        this.direktor = direktor;
        this.trener = trener;
        this.igralci = igralci;
    }

    
  dodajIgralca(igralec: Igralec): void { //to zgleda precej javansko. Preprost push
    this.igralci.push(igralec);
  }

  posodobiIgralca(id: number, igralec: Igralec): void {
    for (let i = 0; i < this.igralci.length; i++) {
      if (this.igralci[i].id === id) {
        this.igralci[i] = igralec;
        return;
        break; //uporabim for ker podpira break
      }
    }
    console.log("igralca z tem ID-jem NI v arrayu!")
  }
   

  odstraniIgralca(id: number): void {
    this.igralci = this.igralci.filter((igralec) => igralec.id !== id);
  }

   izpisiPodatke(): string {
    const igralciStr = this.igralci.map((igralec) => `${igralec.ime} ${igralec.priimek} (${igralec.visina} cm, ${igralec.teza} kg)`) //gre skozi vse igralce. pa jih da v stringica
      .join(', '); //združi vse igralce z vejico
    return `${this.ime} (ustanovljena leta ${this.letoUstanovitve})\nTrener: ${this.trener.ime} ${this.trener.priimek}\nDirektor: ${this.direktor.ime} ${this.direktor.priimek}\nIgralci: ${igralciStr}`;
}

}


export default Ekipa;
