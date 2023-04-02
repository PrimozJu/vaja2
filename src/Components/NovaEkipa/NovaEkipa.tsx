

import React from 'react';
import Telo from '../Telo/Telo';
import { Igralec, Funkcionar } from '../BackendBaje/Oseba';

import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
interface Props {}
import { Ronaldo, teams } from '../BackendBaje/Index';
import Ekipa from '../BackendBaje/Ekipa';
import {Darko, Bojan} from '../BackendBaje/Index';
interface Props {
   ekipe: Ekipa[];
   setEkipe: React.Dispatch<React.SetStateAction<Ekipa[]>>;

}

const NovaEkipa = (props: Props) => {
  
    console.log(props.ekipe); 

    const [ime, setIme] = useState<string>("");
    const [letoUstanovitve, setLetoUstanovitve] = useState<number>(0);


    const handleFormSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();


        //const novaEkipa = {ime: ime , letoUstanovitve: letoUstanovitve, direktor:Bojan ,trener :  Darko, igralci: [Ronaldo]};
        const novaEkipa: Ekipa = new Ekipa(ime , letoUstanovitve, Darko, Bojan, []);

        
        console.log(novaEkipa);
        props.setEkipe([...props.ekipe, novaEkipa]);
        
        teams.push(novaEkipa); //teams je kao backend 
    };

  return (
    <div className="row border border-warning rounded ">
        <div className="col">
            <h2>Ustvari ekipo</h2>
            <Form onSubmit={handleFormSubmit}>
                <div className="row mb-3">
                    <div className="col-md-2">
                        <Form.Label>Ime ekipe</Form.Label>
                    </div>
                    <div className="col-md-10">
                        <Form.Control type="text" placeholder="Vnesi ime" value={ime} onChange={(event) => setIme(event.target.value)} />
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-md-2">
                        <Form.Label>Leto ustanovitve ekipe</Form.Label>
                    </div>
                    <div className="col-md-10">
                        <Form.Control type="text" placeholder="Vnesi leto ustanovitve" value={letoUstanovitve} onChange={(event) => setLetoUstanovitve(Number(event.target.value))} />
                    </div>
                </div>

               

                

                <Button variant="primary" type="submit">
                    Ustvari ekipo
                </Button>
                <button className="btn btn-primary">Prikaži igralce</button>
            </Form>
        </div>
    </div>

);
};

export default NovaEkipa;
