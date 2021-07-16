import { React } from 'react';
import { AuthorizationStatus } from '../../const';
import Spinner from '../spinner/spinner';
import FavoriteItem from '../favorite-item/favorite-item';
import { useSelector } from 'react-redux';
import { getFavorites } from '../../store/data/selectors';
import { getAuthorizationStatus } from '../../store/user/selectors';

const getCities = function (offers) {
  const cities = [];
  for (let i = 0; i < offers.length; i++) {
    if (!cities.includes(offers[i].city.name) && offers[i].isFavorite) {
      cities.push(offers[i].city.name);
    }
  }
  return cities;
};

function FavoriteList() {
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const offers = useSelector(getFavorites);
  const cities = getCities(offers);

  if (authorizationStatus !== AuthorizationStatus.AUTH) {
    return <Spinner />;
  }

  if (cities.length === 0) {
    return (
      <section className='favorites favorites--empty'>
        <h1 className='visually-hidden'>Favorites (empty)</h1>
        <div className='favorites__status-wrapper'>
          <b className='favorites__status'>Nothing yet saved.</b>
          <p className='favorites__status-description'>Save properties to narrow down search or plan your future trips.</p>
        </div>
      </section>);
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
                if (offer.city.name === city) {
                  return <FavoriteItem key={offer.id} offer={offer} />;
                }
              })}
            </div>
          </li>))}
      </ul>
    </section>);
}

export default FavoriteList;
