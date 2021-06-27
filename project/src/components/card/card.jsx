import { React, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { getStarRating } from '../../common';
import offerProps from '../offers/offer.props';

function Card({offer, cardHoverHandler}) {
  const [state, setState] = useState({});

  const onCardHover = () => {
    setState(offer);
    cardHoverHandler(state);
  };

  return (
    <article className='cities__place-card place-card' onMouseEnter={onCardHover}>
      {offer.isPremium &&
        <div className='place-card__mark'>
          <span>Premium</span>
        </div>}
      <div className='cities__image-wrapper place-card__image-wrapper'>
        <Link to={AppRoute.OFFER + offer.id}>
          <img className='place-card__image' src={offer.previewImage} width='260' height='200' alt='Place image' />
        </Link>
      </div>
      <div className='place-card__info'>
        <div className='place-card__price-wrapper'>
          <div className='place-card__price'>
            <b className='place-card__price-value'>&euro;{offer.price}</b>
            <span className='place-card__price-text'>&#47;&nbsp;night</span>
          </div>
          <button className={offer.isFavorite ? 'place-card__bookmark-button place-card__bookmark-button--active button' : 'place-card__bookmark-button button'} type='button'>
            <svg className='place-card__bookmark-icon' width='18' height='19'>
              <use xlinkHref='#icon-bookmark'></use>
            </svg>
            <span className='visually-hidden'>To bookmarks</span>
          </button>
        </div>
        <div className='place-card__rating rating'>
          <div className='place-card__stars rating__stars'>
            <span style={{ width: `${getStarRating(offer.rating)}%` }}></span>
            <span className='visually-hidden'>Rating</span>
          </div>
        </div>
        <h2 className='place-card__name'>
          <Link to={AppRoute.OFFER + offer.id}>Beautiful &amp; luxurious apartment at great location</Link>
        </h2>
        <p className='place-card__type'>Apartment</p>
      </div>
    </article>
  );
}

Card.propTypes = {
  offer: offerProps.isRequired,
  cardHoverHandler: PropTypes.func,
};

export default Card;
