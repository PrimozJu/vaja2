import React from 'react';
import Ekipa from '../BackendBaje/Ekipa';
import './footer.css';

interface Props {
}

const Noga: React.FC<Props> = () => {
    return (
        
        <div>
            <footer className=" mt-auto py-3 text-center text-lg-start bg-light text-muted">
            
                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                    <div className="me-5 d-none d-lg-block">
                        Moje ime je Primož in sem ponosen avtor tega react projekta 
                    </div>

                </section>

            </footer>
        </div>);

};
export default Noga;