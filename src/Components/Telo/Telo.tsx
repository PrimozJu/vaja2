import React from 'react';
import Ekipa from '../BackendBaje/Ekipa';

interface Props {
  maribor: Ekipa;
}

const Telo: React.FC<Props> = ({ maribor }) => {
    console.log(maribor.direktor)
    console.log(maribor.trener)

    return (
                <div>
                    <ul>
                        {
                            maribor.igralci.map(igralec => (
                        <li key={igralec.id}>{igralec.ime} {igralec.priimek}</li>
                        ))
                        }
                    </ul>
                </div>
            );
    
};

export default Telo;