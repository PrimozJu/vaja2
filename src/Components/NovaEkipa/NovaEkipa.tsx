

import React from 'react';
import Telo from '../Telo/Telo';
import { Igralec, Funkcionar } from '../BackendBaje/Oseba';

import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
interface Props {}

const NovaEkipa: React.FC<Props> = () => {
  /* class Ekipa {
    ime: string;
    letoUstanovitve: number;
    direktor: Funkcionar;
    trener: Funkcionar;
    igralci: Igralec[]; */
    const [ime, setIme] = useState<string>("");
    const [letoUstanovitve, setLetoUstanovitve] = useState<string>("");
    const [direktor, setDirektor] = useState<Funkcionar>();
    const [trener, setTrener] = useState<Funkcionar>();
   

    const handleFormSubmit = (event: { preventDefault: () => void; }) => {
        
    };

  return (
    <div className="row border border-warning rounded ">
        <div className="col">
            <h2>Dodaj igralca</h2>
            <Form onSubmit={handleFormSubmit}>
                <div className="row mb-3">
                    <div className="col-md-2">
                        <Form.Label>Ime</Form.Label>
                    </div>
                    <div className="col-md-10">
                        <Form.Control type="text" placeholder="Vnesi ime" value={ime} onChange={(event) => setIme(event.target.value)} />
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-md-2">
                        <Form.Label>Priimek</Form.Label>
                    </div>
                    <div className="col-md-10">
                        <Form.Control type="text" placeholder="Vnesi leto ustanovitve" value={letoUstanovitve} onChange={(event) => setLetoUstanovitve(event.target.value)} />
                    </div>
                </div>

               

                

                <Button variant="primary" type="submit">
                    Dodaj igralca
                </Button>
                <button className="btn btn-primary">Prikaži igralce</button>
            </Form>
        </div>
    </div>

);
};

export default NovaEkipa;
