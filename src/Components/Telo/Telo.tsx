import React, { useState } from 'react';
import Ekipa from '../BackendBaje/Ekipa';

interface Props {
    kera_ekipa: Ekipa;
}

const Telo: React.FC<Props> = ({ kera_ekipa }) => {

    const [igralci, setIgralci] = useState(kera_ekipa.igralci);


    console.log(kera_ekipa.direktor)
    console.log(kera_ekipa.trener)

    return (
        <div>
            <ul>
                {igralci.map((igralec) => (
                    <li key={igralec.id}>
                        {igralec.ime} {igralec.priimek}
                    </li>
                ))}
            </ul>
        </div>
    );

};

export default Telo;