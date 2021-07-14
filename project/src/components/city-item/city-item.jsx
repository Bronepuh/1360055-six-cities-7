import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { selectCity } from '../../store/action';
import { getActiveCity } from '../../store/data/selectors';

function CityItem({ cityName }) {

  const activeCity = useSelector(getActiveCity);

  const dispatch = useDispatch();

  const handleCityClick = (evt) => {
    evt.preventDefault();
    dispatch(selectCity(cityName));
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
};

export default CityItem;
