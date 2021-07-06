import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ActionCreator } from '../../store/action';

function CityItem({ cityName, activeCity, onCitySelect }) {
  const handleCityClick = (evt) => {
    evt.preventDefault();
    onCitySelect(cityName);
  };

  return (
    <li className='locations__item'>
      <a className={cityName !== activeCity ? 'locations__item-link tabs__item' : 'locations__item-link tabs__item tabs__item--active'} href='#' onClick={handleCityClick}>
        <span>{cityName}</span>
      </a>
    </li>
  );
}

CityItem.propTypes = {
  cityName: PropTypes.string,
  activeCity: PropTypes.string,
  onCitySelect: PropTypes.func,
};

const mapStateToProps = (state) => ({
  activeCity: state.activeCity,
});

const mapDispatchToProps = (dispatch) => ({
  onCitySelect(selectedCity) {
    dispatch(ActionCreator.selectCity(selectedCity));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CityItem);
