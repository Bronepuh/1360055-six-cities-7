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

console.dir(api);
// api.get('/hotels').then((res)=> console.log(res));

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
  ),
);

store.dispatch(ActionCreator.setOffers(offers));


api.get('/hotels').then(function(res) {
  store.dispatch(ActionCreator.setHotels(res.data));
});



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
