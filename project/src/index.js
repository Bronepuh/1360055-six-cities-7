import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createAPI from './services/api';

import App from './components/app/app';
import { reducer } from './store/reducer';
import { ActionCreator } from './store/action';
import offers from './mocks/offers';

const api = createAPI();
const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
  ),
);
store.dispatch(ActionCreator.setOffers(offers));

const parseDataToState = function (data) {
  let adaptedData = [];
  data.map((hotel) => {
    // console.log(hotel);    
    const adaptedHotel = Object.assign(
      {},
      hotel,
      {
        city: {
          location: {
            lat: hotel.city.location.latitude,
            lng: hotel.city.location.longitude,
            zoom: hotel.city.location.zoom,
          },
          name: hotel.city.name,
        },
        host: {
          avatarUrl: hotel.host.avatar_url,
          id: hotel.host.id,
          isPro: hotel.host.is_pro,
          name: hotel.host.name,
        },
        isFavorite: hotel.is_favorite,       
        isPremium: hotel.is_premium,    
        location: {
          lat: hotel.location.latitude,
          lng: hotel.location.longitude,
          zoom: hotel.location.zoom,
        }, 
        maxAdults: hotel.max_adults,
        previewImage: hotel.preview_image,

      },
    );

    // Ненужные ключи мы удаляем
    delete adaptedHotel.city.location.latitude;
    delete adaptedHotel.city.location.longitude;
    delete adaptedHotel.city.name;
    delete adaptedHotel.host.avatar_url;
    delete adaptedHotel.host.is_pro;

    delete adaptedHotel.is_favorite;
    delete adaptedHotel.is_premium;

    delete adaptedHotel.location.latitude;
    delete adaptedHotel.location.longitude;

    delete adaptedHotel.max_adults;
    delete adaptedHotel.preview_image;

    // console.log(adaptedHotel);
    return adaptedData.push(adaptedHotel);
  })
  return adaptedData;
}

api.get('/hotels').then((res) => {
  const adaptedHotels = parseDataToState(res.data);  
  // store.dispatch(ActionCreator.setHotels(adaptedHotels));
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
