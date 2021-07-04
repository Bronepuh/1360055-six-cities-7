import {React, useState} from 'react';
import { connect } from 'react-redux';
import 'leaflet/dist/leaflet.css';
import CityList from '../city-list/city-list';
import Offers from '../offers/offers';
import Map from '../../components/map/map';
import stateType from '../../store/stateType';
import {getLocationByName, getOffersByCity} from '../../store/reducer';

function WelcomeScreen({state}) {
  const [selectedPoint, setSelectedPoint] = useState(null);

  const currentCity = getLocationByName(state);
  const currentOffers = getOffersByCity(state);

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
            <CityList cities={state.cities} />
          </section>
        </div>
        <div className='cities'>
          <div className='cities__places-container container'>
            <section className='cities__places places'>
              <h2 className='visually-hidden'>Places</h2>
              <b className='places__found'>{state.offers.length} places to stay in Amsterdam</b>
              <form className='places__sorting' action='#' method='get'>
                <span className='places__sorting-caption'>Sort by</span>
                <span className='places__sorting-type' tabIndex='0'>
                  Popular
                  <svg className='places__sorting-arrow' width='7' height='4'>
                    <use xlinkHref='#icon-arrow-select'></use>
                  </svg>
                </span>
                <ul className='places__options places__options--custom places__options--opened'>
                  <li className='places__option places__option--active' tabIndex='0'>Popular</li>
                  <li className='places__option' tabIndex='0'>Price: low to high</li>
                  <li className='places__option' tabIndex='0'>Price: high to low</li>
                  <li className='places__option' tabIndex='0'>Top rated first</li>
                </ul>
              </form>
              <Offers offers={currentOffers} onListHover={handleListHover} />
            </section>
            <div className='cities__right-section'>
              <section className='cities__map' id="map">
                <Map city={currentCity} offers={state.offers} currentOffers={currentOffers} selectedPoint={selectedPoint}/>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

const mapStateToProps = (state) => ({
  state,
});

WelcomeScreen.propTypes = {
  state: stateType.isRequired,
};

export default connect(mapStateToProps, null)(WelcomeScreen);
