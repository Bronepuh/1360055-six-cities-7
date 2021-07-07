import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card/card';
import offerType from '../../prop-types/offer.type';

function Offers({ offers, onListHover }) {

  return (
    <div className='cities__places-list places__list tabs__content'>
      {offers.map((offer) => <Card key={offer.id} offer={offer} onListHover={onListHover} />)}
    </div>
  );
}

Offers.propTypes = {
  // offers: PropTypes.arrayOf(offerType.isRequired).isRequired,
  onListHover: PropTypes.func,
};

export default Offers;
