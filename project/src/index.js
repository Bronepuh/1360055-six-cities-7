import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import { createStore } from 'redux';
import App from './components/app/app';
import { reducer } from './store/reducer';
import { ActionCreator } from './store/action';
import offers from './mocks/offers';

const store = createStore(
  reducer,
  composeWithDevTools(),
);

store.dispatch(ActionCreator.setOffers(offers));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
