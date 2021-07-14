import { React, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import Spinner from '../spinner/spinner';
import CityList from '../city-list/city-list';
import SortForm from '../sort-form/sort-form';
import Offers from '../offers/offers';
import Map from '../../components/map/map';
import { getLocationByName, getOffersByCity } from '../../common';
import { sortByType } from '../../common';
import { SortType } from '../../const';
import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useSelector } from 'react-redux';
import { getActiveCity, getCities, getOffers, getIsDataLoaded } from '../../store/data/selectors';
import { getAuthorizationStatus } from '../../store/user/selectors';

function WelcomeScreen() {
  const [selectedPoint, setSelectedPoint] = useState(null);
  const [newSortType, setNewSortType] = useState(SortType.POPULAR);

  const activeCity = useSelector(getActiveCity);
  const cities = useSelector(getCities);
  const offers = useSelector(getOffers);
  const isDataLoaded = useSelector(getIsDataLoaded);
  const authorizationStatus = useSelector(getAuthorizationStatus);

  if (!isDataLoaded && !offers.length) {
    return <Spinner />;
  }

  const currentCity = getLocationByName(cities, activeCity);
  const offersByCity = getOffersByCity(offers, activeCity);
  const sortedOffers = sortByType(offersByCity, newSortType);

  const handleSortTypeSelect = function (sortType) {
    setNewSortType(sortType);
  };

  const handleListHover = function (offer) {
    setSelectedPoint(offer);
  };

  return (
    <div className='page page--gray page--main' id='root'>
      <header className='header'>
        <div className='container'>
          <div className='header__wrapper'>
            <div className='header__left'>
              <a className='header__logo-link header__logo-link--active'>
                <img className='header__logo' src='img/logo.svg' alt='6 cities logo' width='81' height='41' />
              </a>
            </div>
            <nav className='header__nav'>
              <ul className='header__nav-list'>
                {authorizationStatus === AuthorizationStatus.AUTH &&
                  <li className='header__nav-item user'>
                    <a className='header__nav-link header__nav-link--profile' href='#'>
                      <div className='header__avatar-wrapper user__avatar-wrapper'>
                      </div>
                      <span className='header__user-name user__name'>Oliver.conner@gmail.com</span>
                    </a>
                  </li>}

                {authorizationStatus === AuthorizationStatus.NO_AUTH &&
                  <li className='header__nav-item'>
                    <Link className='header__nav-link' to={AppRoute.SIGN_IN}>
                      <span className='header__signout'>Sign in</span>
                    </Link>
                  </li>}
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className='page__main page__main--index'>
        <h1 className='visually-hidden'>Cities</h1>
        <div className='tabs'>
          <section className='locations container'>
            <CityList cities={cities} />
          </section>
        </div>
        <div className='cities'>
          <div className='cities__places-container container'>
            <section className='cities__places places'>
              <h2 className='visually-hidden'>Places</h2>
              <b className='places__found'>{offersByCity.length} places to stay in {activeCity}</b>
              <SortForm onSortTypeSelectClick={handleSortTypeSelect} newSortType={newSortType} />
              <Offers offers={sortedOffers} onListHover={handleListHover} />
            </section>
            <div className='cities__right-section'>
              <section className='cities__map' id="map">
                <Map city={currentCity} offers={offers} currentOffers={offersByCity} selectedPoint={selectedPoint} />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default WelcomeScreen;
