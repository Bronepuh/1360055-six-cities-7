import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ActionCreator } from '../../store/action';

function CityItem({ city, state, onCitySelect }) {

  const handleCitySelect = (evt) => {
    evt.preventDefault();
    onCitySelect(evt.target.textContent);
  };

  return (
    <li className='locations__item' onClick={handleCitySelect}>
      <a className={city.name !== state.activeCity ? 'locations__item-link tabs__item' : 'locations__item-link tabs__item tabs__item--active'} href='#'>
        <span>{city.name}</span>
      </a>
    </li>
  );
}

CityItem.propTypes = {
  city: PropTypes.object,
  onCitySelect: PropTypes.func,
  state: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  state: state.activeCity,
});

const mapDispatchToProps = (dispatch) => ({
  onCitySelect(selectedCity) {
    dispatch(ActionCreator.selectCity(selectedCity));
    dispatch(ActionCreator.showOffers(selectedCity));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CityItem);
