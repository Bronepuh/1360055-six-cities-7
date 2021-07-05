import PropTypes from 'prop-types';

const citiesType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  location: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
    zoom: PropTypes.number.isRequired,
  }),
});

export default citiesType;
