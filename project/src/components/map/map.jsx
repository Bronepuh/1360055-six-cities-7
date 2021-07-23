import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import offerType from '../../prop-types/offer.type';
import { icon, iconActive } from '../../const';
import useMap from '../../hooks/useMap';

function Map({ city, currentOffers, selectedPoint, markerFlag, currentOffer }) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city.location);

  const [points, setPoints] = useState([]);
  const [point, setPoint] = useState([]);


  useEffect(() => {
    if (map && markerFlag) {
      map.removeLayer(points);
      const markers = currentOffers.map(getMarker);
      const pins = leaflet.layerGroup(markers);
      pins.addTo(map);
      setPoints(pins);
    }
  }, [map, currentOffers, selectedPoint]);

  useEffect(() => {
    if (map && selectedPoint && markerFlag) {
      map.eachLayer((pin) => {
        if (pin.options.secretId === selectedPoint.id) {
          pin.setIcon(iconActive);
        }
      });
    }
  }, [selectedPoint]);

  useEffect(() => {
    if (map && !markerFlag && currentOffer) {
      map.removeLayer(points);
      map.removeLayer(point);
      const markers = currentOffers.map(getMarker);
      const pins = leaflet.layerGroup(markers);
      const pin = getMarker(currentOffer);
      pins.addTo(map);
      pin.addTo(map);
      pin.setIcon(iconActive);
      setPoints(pins);
      setPoint(pin);
    }
  }, [map, currentOffers]);

  useEffect(() => {
    if (map && selectedPoint && !markerFlag && currentOffer) {
      map.eachLayer((pin) => {
        if (pin.options.secretId === selectedPoint.id) {
          pin.setIcon(iconActive);
        }
      });
    }
  }, []);

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
  currentOffers: PropTypes.arrayOf(offerType.isRequired).isRequired,
  selectedPoint: PropTypes.object,
  markerFlag: PropTypes.bool,
  currentOffer: offerType,
};

export default Map;
