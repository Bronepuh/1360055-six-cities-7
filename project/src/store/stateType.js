import PropTypes from 'prop-types';
import offerType from '../components/offers/offer.type';

const stateType = PropTypes.shape({
  activeCity: PropTypes.string.isRequired,
  cities: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired,
    }),
  })),
  offers: PropTypes.arrayOf(offerType.isRequired).isRequired,
});

export default stateType;
