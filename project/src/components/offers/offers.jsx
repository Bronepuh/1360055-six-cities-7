import {React, useState} from 'react';
import PropTypes from 'prop-types';
import Card from '../card/card';
import offerProps from '../offers/offer.props';

function Offers({offers, listHoverHandler}) {
  const [state, setState] = useState({});
  const cardHoverHandler = (offer) => {
    setState(offer);
    listHoverHandler(state);
  };

  return (
    <div className='cities__places-list places__list tabs__content'>
      {offers.map((offer) => <Card key={offer.id} offer={offer} cardHoverHandler={cardHoverHandler}/>)}
    </div>
  );
}

Offers.propTypes = {
  offers: PropTypes.arrayOf(offerProps.isRequired).isRequired,
  listHoverHandler: PropTypes.func,
};

export default Offers;
