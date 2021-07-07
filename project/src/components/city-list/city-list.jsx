import React from 'react';
import CityItem from '../city-item/city-item';
import { arrayOf } from 'prop-types';
import citiesType from '../../prop-types/cities.type';

function CityList({ cities }) {

  return (
    <ul className='locations__list tabs__list'>
      {cities.map((city) => <CityItem key={city.name} cityName={city.name} />)}
    </ul>
  );
}

CityList.propTypes = {
  cities: arrayOf(citiesType).isRequired,
};

export default CityList;
