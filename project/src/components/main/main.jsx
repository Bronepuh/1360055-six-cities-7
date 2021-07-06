import { React, useState } from 'react';
import PropTypes, { arrayOf } from 'prop-types';
import { connect } from 'react-redux';
import 'leaflet/dist/leaflet.css';
import CityList from '../city-list/city-list';
import SortForm from '../sort-form/sort-form';
import Offers from '../offers/offers';
import Map from '../../components/map/map';
import offerType from '../../prop-types/offer.type';
import citiesType from '../../prop-types/cities.type';
import { getLocationByName, getOffersByCity } from '../../common';
import { sortBySortType } from '../../common';
import { SortType } from '../../const';

function WelcomeScreen({ activeCity, cities, offers }) {
  const [selectedPoint, setSelectedPoint] = useState(null);
  const [newSortType, setNewSortType] = useState(SortType.POPULAR);

  const currentCity = getLocationByName(cities, activeCity);
  const offersByCity = getOffersByCity(offers, activeCity);
  const sortedOffers = sortBySortType(offersByCity, newSortType);

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
                <li className='header__nav-item user'>
                  <a className='header__nav-link header__nav-link--profile' href='#'>
                    <div className='header__avatar-wrapper user__avatar-wrapper'>
                    </div>
                    <span className='header__user-name user__name'>Oliver.conner@gmail.com</span>
                  </a>
                </li>
                <li className='header__nav-item'>
                  <a className='header__nav-link' href='#'>
                    <span className='header__signout'>Sign out</span>
                  </a>
                </li>
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
              <b className='places__found'>{offersByCity.length} places to stay in Amsterdam</b>
              <SortForm handleSortTypeSelect={handleSortTypeSelect}/>
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

const mapStateToProps = (state) => ({
  activeCity: state.activeCity,
  cities: state.cities,
  offers: state.offers,
  sortType: state.sortType,
});

WelcomeScreen.propTypes = {
  activeCity: PropTypes.string.isRequired,
  cities: arrayOf(citiesType).isRequired,
  offers: PropTypes.arrayOf(offerType.isRequired).isRequired,
};

export default connect(mapStateToProps, null)(WelcomeScreen);
