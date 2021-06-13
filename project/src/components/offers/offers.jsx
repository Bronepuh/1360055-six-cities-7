import React from 'react';
import Card from '../card/card';

function Offers(props) {
  const { offers } = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer, idx) => <Card key={idx.toString()} offer={offer} />)}
    </div>
  );
}

export default Offers;
