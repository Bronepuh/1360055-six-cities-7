import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import offerType from '../../prop-types/offer.type';
import { icon, iconActive } from '../../const';
import useMap from '../../hooks/useMap';

function Map({ city, offers, currentOffers, selectedPoint }) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city.location);

  const [points, setPoints] = useState([]);

  const getMarker = function (offer) {
    return leaflet.marker(
      {
        lat: offer.location.lat,
        lng: offer.location.lng,
      },
      {
        icon: icon,
        secretId: offer.id,
      },
    );
  };

  useEffect(() => {
    if (map) {
      map.removeLayer(points);
      const markers = currentOffers.map(getMarker);
      const pins = leaflet.layerGroup(markers);
      pins.addTo(map);
      setPoints(pins);
    }
  }, [map, offers]);

  useEffect(() => {
    if (map, selectedPoint) {
      map.eachLayer((pin) => {
        if (pin.options.secretId === selectedPoint.id) {
          pin.setIcon(iconActive);
        }
      });
    } else if (map) {
      map.eachLayer((pin) => {
        if (pin.options.secretId) {
          pin.setIcon(icon);
        }
      });
    }
  }, [map, selectedPoint]);

  return (
    <div style={{ height: '100%' }} ref={mapRef} />
  );
}

Map.propTypes = {
  city: PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired,
    }),
  }),
  // offers: PropTypes.arrayOf(offerType.isRequired).isRequired,
  currentOffers: PropTypes.arrayOf(offerType.isRequired).isRequired,
  selectedPoint: PropTypes.object,
};

export default Map;
