const AppRoute = {
  MAIN: '/',
  SIGN_IN: '/login/',
  FAVORITES: '/favorites/',
  ROOM_$ID: '/offer/:id/',
  OFFER: '/offer/',
};

const AmsterdamPoints = [
  {
    title: 'Саундвью',
    lat: 52.3909553943508,
    lng: 4.85309666406198,
  }, {
    title: 'Ферри Поинт',
    lat: 52.369553943508,
    lng: 4.85309666406198,
  }, {
    title: 'Бронкс',
    lat: 52.3909553943508,
    lng: 4.929309666406198,
  }, {
    title: 'Инвуд-Хилл',
    lat: 52.3809553943508,
    lng: 4.939309666406198,
  },
];

export { AppRoute, AmsterdamPoints };
