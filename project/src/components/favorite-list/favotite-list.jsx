import React from 'react';
import PropTypes from 'prop-types';
import { getStarRating } from '../../common';
import offerType from '../../propTypes/offer.type';

const getCities = function (offers) {
  const cities = [];
  for (let i = 0; i < offers.length; i++) {
    if (!cities.includes(offers[i].city.name) && offers[i].isFavorite) {
      cities.push(offers[i].city.name);
    }
  }

  return cities;
};

function FavoriteList({offers}) {
  const cities = getCities(offers);

  if (cities.length === 0) {
    return (<section className='favorites favorites--empty'>
      <h1 className='visually-hidden'>Favorites (empty)</h1>
      <div className='favorites__status-wrapper'>
        <b className='favorites__status'>Nothing yet saved.</b>
        <p className='favorites__status-description'>Save properties to narrow down search or plan your future trips.</p>
      </div></section>);
  }

  return (
    <section className='favorites'>
      <h1 className='favorites__title'>Saved listing</h1>
      <ul className='favorites__list'>

        {cities.map((city, idx) => (
          <li className='favorites__locations-items' key={idx.toString()}>
            <div className='favorites__locations locations locations--current'>
              <div className='locations__item'>
                <a className='locations__item-link' href='#'>
                  <span>{city}</span>
                </a>
              </div>
            </div>
            <div className='favorites__places'>

              {offers.map((offer) => {
                if (offer.city.name === city && offer.isFavorite) {
                  return (<article className='favorites__card place-card' key={offer.id}>
                    <div className='favorites__image-wrapper place-card__image-wrapper'>
                      <a href='#'>
                        <img className='place-card__image' src={offer.previewImage} width='150' height='110' alt='Place image' />
                      </a>
                    </div>
                    <div className='favorites__card-info place-card__info'>
                      <div className='place-card__price-wrapper'>
                        <div className='place-card__price'>
                          <b className='place-card__price-value'>&euro;{offer.price}</b>
                          <span className='place-card__price-text'>&#47;&nbsp;night</span>
                        </div>
                        <button className='place-card__bookmark-button place-card__bookmark-button--active button' type='button'>
                          <svg className='place-card__bookmark-icon' width='18' height='19'>
                            <use xlinkHref='#icon-bookmark'></use>
                          </svg>
                          <span className='visually-hidden'>In bookmarks</span>
                        </button>
                      </div>
                      <div className='place-card__rating rating'>
                        <div className='place-card__stars rating__stars'>
                          <span style={{ width: `${getStarRating(offer.rating)}%` }}></span>
                          <span className='visually-hidden'>Rating</span>
                        </div>
                      </div>
                      <h2 className='place-card__name'>
                        <a href='#'>{offer.description}</a>
                      </h2>
                      <p className='place-card__type'>{offer.type}</p>
                    </div></article>);
                }
              })}
            </div>
          </li>),
        )}
      </ul>
    </section>);
}

FavoriteList.propTypes = {
  offers: PropTypes.arrayOf(offerType.isRequired).isRequired,
};

export default FavoriteList;
