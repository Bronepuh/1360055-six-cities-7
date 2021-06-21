import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import offerProps from '../offers/offer.props';
import { icon } from '../../const';
import useMap from '../../hooks/useMap';

function Map(props) {
  const { city, offers } = props;
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.location.lat,
            lng: offer.location.lng,
          }, {icon})
          .addTo(map);
      });
    }
  }, [map, offers]);

  return (
    <div style={{ height: '100%' }} ref={mapRef} />
  );
}

Map.propTypes = {
  city: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
    zoom: PropTypes.number,
  }),
  offers: PropTypes.arrayOf(offerProps.isRequired).isRequired,
};

export default Map;
