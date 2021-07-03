import React from 'react';
import CityItem from '../city-item/city-item';
import PropTypes from 'prop-types';

function CityList({cities}) {
  return (
    <ul className='locations__list tabs__list'>
      {cities.map((city) => <CityItem key={city.name} city={city} />)}
    </ul>
  );
}

CityList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired,
    }),
  })),
};

export default CityList;
