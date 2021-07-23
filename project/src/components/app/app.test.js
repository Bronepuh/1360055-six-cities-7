import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import {AuthorizationStatus, AppRoute, CITIES} from '../../const';
import App from './app';

let history = null;
let store = null;
let fakeApp = null;

describe('Application Routing', () => {
  beforeAll(() => {
    history = createMemoryHistory();

    const createFakeStore = configureStore({});
    store = createFakeStore({
      USER: {authorizationStatus: AuthorizationStatus.NO_AUTH},
      DATA: {
        cities: CITIES,
        activeCity: 'Paris',
        offers: [{
          bedrooms: 3,
          city:
          {
            location:
            {
              lat: 48.85661,
              lng: 2.351499,
              zoom: 13,
            },
            name: 'Paris',
          },
          description: 'I rent out a very sunny and bright apartment only 7 minutes walking distance to the metro station. The apartment has a spacious living room with a kitchen, one bedroom and a bathroom with mit bath. A terrace can be used in summer.',
          goods:
            ['Towels', 'Fridge', 'Air conditioning', 'Washing machine', 'Breakfast', 'Dishwasher', 'Laptop friendly workspace', 'Coffee machine', 'Washer', 'Baby seat'],
          host:
          {
            avatarUrl: 'img/avatar-angelina.jpg',
            id: 25,
            isPro: true,
            name: 'Angelina',
          },
          id: 1,
          images:
            ['https://7.react.pages.academy/static/hotel/12.jpg', 'https://7.react.pages.academy/static/hotel/18.jpg', 'https://7.react.pages.academy/static/hotel/20.jpg', 'https://7.react.pages.academy/static/hotel/13.jpg', 'https://7.react.pages.academy'],

          isFavorite: false,
          isPremium: false,
          location:
          {
            lat: 48.83961,
            lng: 2.342499,
            zoom: 16,
          },
          maxAdults: 8,
          previewImage: 'https://7.react.pages.academy/static/hotel/15.jpg',
          price: 291,
          rating: 4.3,
          title: 'Penthouse, 4-5 rooms + 5 balconies',
          type: 'hotel',
        }],
        isDataLoaded: true,
        favorites: [],
      },
    });

    fakeApp = (
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    );
  });

  it('should render "WelcomeScreen" when user navigate to "/"', () => {
    history.push(AppRoute.MAIN);
    render(fakeApp);

    expect(screen.getByText(/Cities/i)).toBeInTheDocument();
  });

  it('should render "NotFound" when user navigate to "/not-found"', () => {
    history.push(AppRoute.NOT_FOUND);
    render(fakeApp);

    expect(screen.getByText(/Error 404/i)).toBeInTheDocument();
    expect(screen.getByText(/Page not found/i)).toBeInTheDocument();
    expect(screen.getByText(/Go to main page/i)).toBeInTheDocument();
  });

  it('should render "Sign-in" when user navigate to "/login/"', () => {
    history.push(AppRoute.SIGN_IN);
    render(fakeApp);

    expect(screen.getByText(/E-mail/i)).toBeInTheDocument();
    expect(screen.getByText(/Password/i)).toBeInTheDocument();
  });

});

