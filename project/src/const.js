import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

const AVATAR_URL = 'https://i.pravatar.cc/128';

const AppRoute = {
  MAIN: '/',
  SIGN_IN: '/login/',
  FAVORITES: '/favorites/',
  ROOM_$ID: '/offer/:id/',
  OFFER: '/offer/',
};

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

const commentGet = [{
  comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  date: '2019-05-08T14:13:56.569Z',
  id: 1,
  rating: 4,
  user: {
    avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
    id: 4,
    isPro: false,
    name: 'Yoda',
  },
},
{
  comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  date: '2019-06-08T14:13:56.569Z',
  id: 2,
  rating: 5,
  user: {
    avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
    id: 4,
    isPro: false,
    name: 'R2D2',
  },
}];

const CITIES = [
  {
    name: 'Paris',
    location: {
      lat: 52.370216,
      lng: 4.895168,
      zoom: 10,
    },
  },
  {
    name: 'Cologne',
    location: {
      lat: 52.370216,
      lng: 4.895168,
      zoom: 10,
    },
  },
  {
    name: 'Brussels',
    location: {
      lat: 52.370216,
      lng: 4.895168,
      zoom: 10,
    },
  },
  {
    name: 'Amsterdam',
    location: {
      lat: 52.38333,
      lng: 4.9,
      zoom: 12,
    },
  },
  {
    name: 'Hamburg',
    location: {
      lat: 52.370216,
      lng: 4.895168,
      zoom: 10,
    },
  },
  {
    name: 'Dusseldorf',
    location: {
      lat: 52.370216,
      lng: 4.895168,
      zoom: 10,
    },
  },
];

const SortTypes = [
  { type: 'Popular' },
  { type: 'Price: low to high' },
  { type: 'Price: high to low' },
  { type: 'Top rated first'},
];

export { AppRoute, icon, iconActive, commentGet, CITIES, SortTypes };
