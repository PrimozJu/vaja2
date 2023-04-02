import React, { useState } from 'react';
import { teams } from '../BackendBaje/Index';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import NovaEkipa from '../NovaEkipa/NovaEkipa';

const SeznamEkip = () => {
  const [ekipe, setEkipe] = useState(teams);
  
  return (
    <div>
      <CardGroup>
        {ekipe.map((ekipa) => (
          <Card key={ekipa.ime}>
            <Card.Body>
              <Card.Title>{ekipa.ime}</Card.Title>
              <Card.Text>since {ekipa.letoUstanovitve}</Card.Text>
              <Link to={`/${ekipa.ime}`} className="btn btn-primary">
                Več
              </Link>
            </Card.Body>
          </Card>
        ))}
      </CardGroup>
          <NovaEkipa ekipe={ekipe} setEkipe={setEkipe}/>
    </div>
  );
};

export default SeznamEkip;
