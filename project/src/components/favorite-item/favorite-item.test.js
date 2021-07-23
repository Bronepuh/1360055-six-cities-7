import { render, screen } from '@testing-library/react';
import React from 'react';
import FavoriteItem from './favorite-item';
import { Router, Switch, Route } from 'react-router-dom';

import { createMemoryHistory } from 'history';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { parseHotelToState } from '../../common';

let store = null;
let history;

const createFakeStore = configureStore({});
const offer = {
  'bedrooms': 3,
  'city':
  {
    'location':
    {
      'latitude': 48.85661,
      'longitude': 2.351499,
      'zoom': 13,
    },
    'name': 'Paris',
  },
  'description': 'I rent out a very sunny and bright apartment only 7 minutes walking distance to the metro station. The apartment has a spacious living room with a kitchen, one bedroom and a bathroom with mit bath. A terrace can be used in summer.',
  'goods':
    ['Towels', 'Fridge', 'Air conditioning', 'Washing machine', 'Breakfast', 'Dishwasher', 'Laptop friendly workspace', 'Coffee machine', 'Washer', 'Baby seat'],
  'host':
  {
    'avatar_url': 'img/avatar-angelina.jpg',
    'id': 25,
    'is_pro': true,
    'name': 'Angelina',
  },
  'id': 1,
  'images':
    ['https://7.react.pages.academy/static/hotel/12.jpg', 'https://7.react.pages.academy/static/hotel/18.jpg', 'https://7.react.pages.academy/static/hotel/20.jpg', 'https://7.react.pages.academy/static/hotel/13.jpg', 'https://7.react.pages.academy'],

  'is_favorite': true,
  'is_premium': false,
  'location':
  {
    'latitude': 48.83961,
    'longitude': 2.342499,
    'zoom': 16,
  },
  'max_adults': 8,
  'preview_image': 'https://7.react.pages.academy/static/hotel/15.jpg',
  'price': 291,
  'rating': 4.3,
  'title': 'Penthouse, 4-5 rooms + 5 balconies',
  'type': 'hotel',
};

const adaptedOffer = parseHotelToState(offer);

store = createFakeStore({});

describe('Component: FavoriteItem', () => {
  beforeAll(() => {
    history = createMemoryHistory();
  });
  it('should render correctly', () => {

    history.push('/fake');
    render(
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route path="/" exact>
              <h1>This is main page</h1>
            </Route>
            <Route>
              <FavoriteItem offer={adaptedOffer} />
            </Route>
          </Switch>
        </Router>
      </Provider>);
    expect(screen.getByText(/In bookmarks/i)).toBeInTheDocument();
  });
});
