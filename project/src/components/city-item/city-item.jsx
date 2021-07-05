import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ActionCreator } from '../../store/action';

function CityItem({ cityName, activeCity, onCitySelect }) {

  const handleCitySelect = (evt) => {
    evt.preventDefault();
    onCitySelect(cityName);
  };

  return (
    <li className='locations__item' onClick={handleCitySelect}>
      <a className={cityName !== activeCity ? 'locations__item-link tabs__item' : 'locations__item-link tabs__item tabs__item--active'} href='#'>
        <span>{cityName}</span>
      </a>
    </li>
  );
}

CityItem.propTypes = {
  cityName: PropTypes.string,
  onCitySelect: PropTypes.func,
  activeCity: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  activeCity: state.activeCity,
});

const mapDispatchToProps = (dispatch) => ({
  onCitySelect(selectedCity) {
    dispatch(ActionCreator.selectCity(selectedCity));
    dispatch(ActionCreator.showOffers(selectedCity));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CityItem);
