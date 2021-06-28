import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import offerType from '../offers/offer.type';
import { icon, iconActive } from '../../const';
import useMap from '../../hooks/useMap';

function Map({ city, offers, selectedPoint }) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.location.lat,
            lng: offer.location.lng,
          },
          {
            icon: (selectedPoint && selectedPoint.id === offer.id)
              ? iconActive
              : icon,
          },
          )
          .addTo(map);
      });
    }
  }, [map, offers, selectedPoint]);

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
  offers: PropTypes.arrayOf(offerType.isRequired).isRequired,
  selectedPoint: PropTypes.object,
};

export default Map;
