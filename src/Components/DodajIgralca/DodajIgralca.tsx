import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import Ekipa from '../BackendBaje/Ekipa';
import { teams } from "../BackendBaje/Index";
import { Igralec } from "../BackendBaje/Oseba";
interface Props {
    kera_ekipa: Ekipa;
    igralci: Igralec[];
    setIgralci: React.Dispatch<React.SetStateAction<Igralec[]>>;
}


const DodajIgralca: React.FC<Props> = ({ kera_ekipa, igralci, setIgralci }) => {

    //to je za vnos polij
    const [ime, setIme] = useState<string>("");
    const [priimek, setPriimek] = useState<string>("");
    const [letoRojstva, setLetoRojstva] = useState<number>(0);
    const [visina, setVisina] = useState<number>(0);
    const [teza, setTeza] = useState<number>(0);
    const [poskodovan, setPoskodovan] = useState<boolean>(false);
    const [id, setId] = useState<number>(0);

    const handleFormSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        console.log("Form submitted");
        const new_igralec = { ime, priimek, letoRojstva, visina, teza, poskodovan, id };
        console.log(new_igralec);
        sprazni_polja();

        setIgralci([...igralci, new_igralec]);//doda not in se vse updejta
        kera_ekipa.igralci.push(new_igralec);


    };

    const sprazni_polja = () => { //zakaj se to sprazni
        setIme("");
        setPriimek("");
        setLetoRojstva(0);
        setId(0);
        setVisina(0);
        setTeza(0);
        setPoskodovan(false);
        setId(0);
    }

    const preglejState = () => {
        console.log(igralci);
    }

    const Simuliraj = () => {
        setIgralci([...igralci, { ime: "Baje", priimek: "Bajec", letoRojstva: 1999, visina: 190, teza: 90, poskodovan: false, id: 18 + 1 }]);
        console.log(igralci);

    }

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
                            <Form.Control type="text" placeholder="Vnesi priimek" value={priimek} onChange={(event) => setPriimek(event.target.value)} />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-2">
                            <Form.Label>Leto rojstva</Form.Label>
                        </div>
                        <div className="col-md-10">
                            <Form.Control type="number" placeholder="Vnesi leto rojstva" value={letoRojstva} onChange={(event) => setLetoRojstva(Number(event.target.value))} />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-2">
                            <Form.Label>Visina</Form.Label>
                        </div>
                        <div className="col-md-10">
                            <Form.Control type="number" placeholder="Vnesi visino v cm" value={visina} onChange={(event) => setVisina(Number(event.target.value))} />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-2">
                            <Form.Label>Teža</Form.Label>
                        </div>
                        <div className="col-md-10">
                            <Form.Control type="number" step="0.1" placeholder="Vnesi težo v kg" value={teza} onChange={(event) => setTeza(Number(event.target.value))} />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-2">
                            <Form.Label>Poškodovan</Form.Label>
                        </div>
                        <div className="col-md-10">
                            <Form.Check
                                type="checkbox"
                                checked={poskodovan}
                                onChange={(event) => setPoskodovan(event.target.checked)}
                                className="btn-xl " // Add this class to make the button larger
                            />

                        </div>

                    </div>
                    <div className="row mb-3">
                        <div className="col-md-2">
                            <Form.Label>ID</Form.Label>
                        </div>
                        <div className="col-md-10">
                            <Form.Control type="number" step="1" min="17" placeholder="Vnesi ID" value={id} onChange={(event) => setId(Number(event.target.value))} />
                        </div>
                    </div>

                    <Button variant="primary" type="submit">
                        Dodaj igralca 
                    </Button>
                    <button className="btn btn-primary" onClick={() => preglejState()}>Prikaži igralce</button>
                    <button className="btn btn-primary" onClick={() => Simuliraj()}  >Simuliraj igralca</button>
                </Form>
            </div>
        </div>

    );
}
export default DodajIgralca
