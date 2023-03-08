import React from 'react';
import Ekipa from '../BackendBaje/Ekipa';
import { Igralec } from '../BackendBaje/Oseba';

interface Props {
  igralec: Igralec;
}

const Igralec: React.FC<Props> = ({ igralec }) => {
 

    return (
                <div>
                    <table>
                        <tr>
                            <td>{igralec.id}</td>
                            <td>{igralec.ime}</td>
                            <td>{igralec.priimek}</td>
                            <td>{igralec.letoRojstva}</td>
                            <td>{igralec.visina}cm </td>
                            <td>{igralec.teza}kg</td>
                        </tr>
                    </table>
                </div>
            );
    
};

export default Igralec;