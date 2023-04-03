import React from 'react';
import Ekipa from '../BackendBaje/Ekipa';

interface Props {
}

const Opozorilo: React.FC<Props> = () => {


    return (
        <h3 color='red'>Ekipa ima manj kot 11 igralcev</h3>
    );

};

export default Opozorilo;