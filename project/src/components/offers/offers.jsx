import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card/card';
import offerProps from '../offers/offer.props';

function Offers(props) {
  const { offers } = props;

  return (
    <div className='cities__places-list places__list tabs__content'>
      {offers.map((offer) => <Card key={offer.id} offer={offer} />)}
    </div>
  );
}

Offers.propTypes = {
  offers: PropTypes.arrayOf(offerProps.isRequired).isRequired,
};

export default Offers;
