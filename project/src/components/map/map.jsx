import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import offerProps from '../offers/offer.props';

function Map(props) {
  const { city, offers } = props;
  const mapRef = useRef(null);

  useEffect(() => {
    const icon = leaflet.icon({
      iconUrl: 'img/pin.svg',
      iconSize: [30, 30],
      iconAnchor: [15, 30],
    });

    const zoom = 12;
    const map = leaflet.map('map',
      {
        center: city,
        zoom: zoom,
        zoomControl: false,
        marker: true,
      });
    map.setView(city, zoom);

    leaflet
      .tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      })
      .addTo(map);

    offers.forEach((offer) => {
      leaflet
        .marker(offer.location, { icon })
        .addTo(map);
    });
  });

  return (
    <div style={{ height: '100%' }} ref={mapRef}>

    </div>
  );
}

Map.propTypes = {
  city: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
  }),
  offers: PropTypes.arrayOf(offerProps.isRequired).isRequired,
};

export default Map;
