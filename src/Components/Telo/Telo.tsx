import React, { useState , useEffect} from 'react';
import Ekipa from '../BackendBaje/Ekipa';
import DodajIgralca from '../DodajIgralca/DodajIgralca';

interface Props {
    kera_ekipa: Ekipa;
}

const Telo: React.FC<Props> = ({ kera_ekipa }) => {

    const [igralci, setIgralci] = useState(kera_ekipa.igralci); //naredis novo stanje, ki je enako igralcem iz ekipe

    const [igralciCount, setIgralciCount] = useState(igralci.length);

     useEffect(() => { //to se da brez useEffecta, ampak naloga zahteva useEffect
        setIgralciCount(igralci.length);
    }, [igralci]);  //kadar se spremeni igralci, se spremeni tudi igralciCount

    

    return (
        <div>
            V ekipi {kera_ekipa.ime} so trenutno ({igralciCount}){" "}
            {igralci.length === 1 ? "igralec" :
                igralci.length === 2 ? "igralca" :
                    igralci.length <= 4 ? "igralci" :
                        "igralcev"
            }
            <ul>
                {igralci.map((igralec) => (
                    <li key={igralec.id}>
                        {igralec.ime} {igralec.priimek}
                    </li>
                ))}
            </ul>

            <DodajIgralca kera_ekipa={kera_ekipa} igralci={igralci} setIgralci={setIgralci} />
        </div>
    );

};

export default Telo;