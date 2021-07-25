import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

const icon = leaflet.icon({
  iconUrl: '/img/pin.svg',
  iconSize: [30, 30],
  iconAnchor: [15, 30],
});

const iconActive = leaflet.icon({
  iconUrl: '/img/pin-active.svg',
  iconSize: [30, 30],
  iconAnchor: [15, 30],
});

const DEFAULT_CITY = 'Paris';

const CITIES = [
  {
    name: 'Paris',
    location: {
      lat: 48.85661,
      lng: 2.351499,
      zoom: 13,
    },
  },
  {
    name: 'Cologne',
    location: {
      lat: 50.938361,
      lng: 6.959974,
      zoom: 13,
    },
  },
  {
    name: 'Brussels',
    location: {
      lat: 50.846557,
      lng: 4.351697,
      zoom: 13,
    },
  },
  {
    name: 'Amsterdam',
    location: {
      lat: 52.37454,
      lng: 4.897976,
      zoom: 13,
    },
  },
  {
    name: 'Hamburg',
    location: {
      lat: 53.550341,
      lng: 10.000654,
      zoom: 13,
    },
  },
  {
    name: 'Dusseldorf',
    location: {
      lat: 51.225402,
      lng: 6.776314,
      zoom: 13,
    },
  },
];

const SortType = {
  POPULAR: 'Popular',
  TO_HIGHT: 'Price: low to high',
  TO_LOW: 'Price: high to low',
  TOP_RATE: 'Top rated first',
};

const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
};

const AppRoute = {
  MAIN: '/',
  NOT_FOUND: '/not-found',
  SIGN_IN: '/login/',
  FAVORITES: '/favorites/',
  ROOM_$ID: '/offer/:id/',
  OFFER: '/offer/',
};

const APIRoute = {
  HOTELS: '/hotels',
  NEARBY: '/nearby',
  LOGIN: '/login',
  LOGOUT: '/logout',
  COMMENTS: '/comments',
  FAVORITES: '/favorite',
};

export { AppRoute, icon, iconActive, CITIES, DEFAULT_CITY, SortType, AuthorizationStatus, APIRoute };
