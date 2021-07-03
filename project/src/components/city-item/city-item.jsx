import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ActionCreator } from '../../store/action';
import stateType from '../../store/stateType';

function CityItem({ city, state, onCitySelect }) {
  return (
    <li className='locations__item' onClick={onCitySelect}>
      <a className={city.name !== state.activeCity ? 'locations__item-link tabs__item' : 'locations__item-link tabs__item tabs__item--active'} href='#'>
        <span>{city.name}</span>
      </a>
    </li>
  );
}

CityItem.propTypes = {
  city: PropTypes.object,
  onCitySelect: PropTypes.func,
  state: stateType.isRequired,
};

const mapStateToProps = (state) => ({
  state,
});

const mapDispatchToProps = (dispatch) => ({
  onCitySelect(evt) {
    dispatch(ActionCreator.selectCity(evt.target.textContent));
    dispatch(ActionCreator.showOffers(evt.target.textContent));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CityItem);
