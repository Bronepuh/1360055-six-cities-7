/* eslint-disable camelcase */

import MockAdapter from 'axios-mock-adapter';
import createAPI from '../services/api';
import { ActionType } from './action';
import { fetchHotelList, checkAuth, login, fetchHotelItem, fetchNearby, fetchComments, fetchFavorites, pushComment } from './api-actions';
import { APIRoute, AppRoute, AuthorizationStatus } from '../const';

let api = null;

describe('Async operations', () => {
  beforeAll(() => {
    api = createAPI(() => { });
  });

  it('should make a correct API call to GET /login', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthLoader = checkAuth();

    apiMock
      .onGet(APIRoute.LOGIN)
      .reply(200, [{ fake: true }]);

    return checkAuthLoader(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
      });
  });

  it('should make a correct API call to POST /login', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeUser = { email: 'test@test.ru', password: '123456' };
    const loginLoader = login(fakeUser);

    apiMock
      .onPost(APIRoute.LOGIN)
      .reply(200, [{ fake: true }]);

    return loginLoader(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: AppRoute.FAVORITES,
        });
      });
  });

  it('should make a correct API call to GET /hotels', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offers = [{
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
    },
    {
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
    },
    ];

    const fetchHotelsLoader = fetchHotelList();

    apiMock
      .onGet(APIRoute.HOTELS)
      .reply(200,
        [{
          bedrooms: 3,
          city:
          {
            location:
            {
              latitude: 48.85661,
              longitude: 2.351499,
              zoom: 13,
            },
            name: 'Paris',
          },
          description: 'I rent out a very sunny and bright apartment only 7 minutes walking distance to the metro station. The apartment has a spacious living room with a kitchen, one bedroom and a bathroom with mit bath. A terrace can be used in summer.',
          goods:
            ['Towels', 'Fridge', 'Air conditioning', 'Washing machine', 'Breakfast', 'Dishwasher', 'Laptop friendly workspace', 'Coffee machine', 'Washer', 'Baby seat'],
          host:
          {
            avatar_url: 'img/avatar-angelina.jpg',
            id: 25,
            is_pro: true,
            name: 'Angelina',
          },
          id: 1,
          images:
            ['https://7.react.pages.academy/static/hotel/12.jpg', 'https://7.react.pages.academy/static/hotel/18.jpg', 'https://7.react.pages.academy/static/hotel/20.jpg', 'https://7.react.pages.academy/static/hotel/13.jpg', 'https://7.react.pages.academy'],

          is_favorite: false,
          is_premium: false,
          location:
          {
            latitude: 48.83961,
            longitude: 2.342499,
            zoom: 16,
          },
          max_adults: 8,
          preview_image: 'https://7.react.pages.academy/static/hotel/15.jpg',
          price: 291,
          rating: 4.3,
          title: 'Penthouse, 4-5 rooms + 5 balconies',
          type: 'hotel',
        },
        {
          bedrooms: 3,
          city:
          {
            location:
            {
              latitude: 48.85661,
              longitude: 2.351499,
              zoom: 13,
            },
            name: 'Paris',
          },
          description: 'I rent out a very sunny and bright apartment only 7 minutes walking distance to the metro station. The apartment has a spacious living room with a kitchen, one bedroom and a bathroom with mit bath. A terrace can be used in summer.',
          goods:
            ['Towels', 'Fridge', 'Air conditioning', 'Washing machine', 'Breakfast', 'Dishwasher', 'Laptop friendly workspace', 'Coffee machine', 'Washer', 'Baby seat'],
          host:
          {
            avatar_url: 'img/avatar-angelina.jpg',
            id: 25,
            is_pro: true,
            name: 'Angelina',
          },
          id: 1,
          images:
            ['https://7.react.pages.academy/static/hotel/12.jpg', 'https://7.react.pages.academy/static/hotel/18.jpg', 'https://7.react.pages.academy/static/hotel/20.jpg', 'https://7.react.pages.academy/static/hotel/13.jpg', 'https://7.react.pages.academy'],

          is_favorite: false,
          is_premium: false,
          location:
          {
            latitude: 48.83961,
            longitude: 2.342499,
            zoom: 16,
          },
          max_adults: 8,
          preview_image: 'https://7.react.pages.academy/static/hotel/15.jpg',
          price: 291,
          rating: 4.3,
          title: 'Penthouse, 4-5 rooms + 5 balconies',
          type: 'hotel',
        }],
      );

    return fetchHotelsLoader(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_OFFERS,
          payload: offers,
        });
      });
  });

  it('should make a correct API call to GET /hotels/:id', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offer = {
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
    };

    const id = 1;
    const fetchHotelLoader = fetchHotelItem(id);

    apiMock
      .onGet(`${APIRoute.HOTELS}/${id}`)
      .reply(200,
        {
          bedrooms: 3,
          city:
          {
            location:
            {
              latitude: 48.85661,
              longitude: 2.351499,
              zoom: 13,
            },
            name: 'Paris',
          },
          description: 'I rent out a very sunny and bright apartment only 7 minutes walking distance to the metro station. The apartment has a spacious living room with a kitchen, one bedroom and a bathroom with mit bath. A terrace can be used in summer.',
          goods:
            ['Towels', 'Fridge', 'Air conditioning', 'Washing machine', 'Breakfast', 'Dishwasher', 'Laptop friendly workspace', 'Coffee machine', 'Washer', 'Baby seat'],
          host:
          {
            avatar_url: 'img/avatar-angelina.jpg',
            id: 25,
            is_pro: true,
            name: 'Angelina',
          },
          id: 1,
          images:
            ['https://7.react.pages.academy/static/hotel/12.jpg', 'https://7.react.pages.academy/static/hotel/18.jpg', 'https://7.react.pages.academy/static/hotel/20.jpg', 'https://7.react.pages.academy/static/hotel/13.jpg', 'https://7.react.pages.academy'],

          is_favorite: false,
          is_premium: false,
          location:
          {
            latitude: 48.83961,
            longitude: 2.342499,
            zoom: 16,
          },
          max_adults: 8,
          preview_image: 'https://7.react.pages.academy/static/hotel/15.jpg',
          price: 291,
          rating: 4.3,
          title: 'Penthouse, 4-5 rooms + 5 balconies',
          type: 'hotel',
        },
      );

    return fetchHotelLoader(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_OFFER_BY_ID,
          payload: offer,
        });
      });
  });

  it('should make a correct API call to GET /hotels/:id/nearby', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offers = [{
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
    },
    {
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
    },
    ];

    const id = 1;
    const fetchNearbyLoader = fetchNearby(id);

    apiMock
      .onGet(`${APIRoute.HOTELS}/${id}${APIRoute.NEARBY}`)
      .reply(200,
        [{
          bedrooms: 3,
          city:
          {
            location:
            {
              latitude: 48.85661,
              longitude: 2.351499,
              zoom: 13,
            },
            name: 'Paris',
          },
          description: 'I rent out a very sunny and bright apartment only 7 minutes walking distance to the metro station. The apartment has a spacious living room with a kitchen, one bedroom and a bathroom with mit bath. A terrace can be used in summer.',
          goods:
            ['Towels', 'Fridge', 'Air conditioning', 'Washing machine', 'Breakfast', 'Dishwasher', 'Laptop friendly workspace', 'Coffee machine', 'Washer', 'Baby seat'],
          host:
          {
            avatar_url: 'img/avatar-angelina.jpg',
            id: 25,
            is_pro: true,
            name: 'Angelina',
          },
          id: 1,
          images:
            ['https://7.react.pages.academy/static/hotel/12.jpg', 'https://7.react.pages.academy/static/hotel/18.jpg', 'https://7.react.pages.academy/static/hotel/20.jpg', 'https://7.react.pages.academy/static/hotel/13.jpg', 'https://7.react.pages.academy'],

          is_favorite: false,
          is_premium: false,
          location:
          {
            latitude: 48.83961,
            longitude: 2.342499,
            zoom: 16,
          },
          max_adults: 8,
          preview_image: 'https://7.react.pages.academy/static/hotel/15.jpg',
          price: 291,
          rating: 4.3,
          title: 'Penthouse, 4-5 rooms + 5 balconies',
          type: 'hotel',
        },
        {
          bedrooms: 3,
          city:
          {
            location:
            {
              latitude: 48.85661,
              longitude: 2.351499,
              zoom: 13,
            },
            name: 'Paris',
          },
          description: 'I rent out a very sunny and bright apartment only 7 minutes walking distance to the metro station. The apartment has a spacious living room with a kitchen, one bedroom and a bathroom with mit bath. A terrace can be used in summer.',
          goods:
            ['Towels', 'Fridge', 'Air conditioning', 'Washing machine', 'Breakfast', 'Dishwasher', 'Laptop friendly workspace', 'Coffee machine', 'Washer', 'Baby seat'],
          host:
          {
            avatar_url: 'img/avatar-angelina.jpg',
            id: 25,
            is_pro: true,
            name: 'Angelina',
          },
          id: 1,
          images:
            ['https://7.react.pages.academy/static/hotel/12.jpg', 'https://7.react.pages.academy/static/hotel/18.jpg', 'https://7.react.pages.academy/static/hotel/20.jpg', 'https://7.react.pages.academy/static/hotel/13.jpg', 'https://7.react.pages.academy'],

          is_favorite: false,
          is_premium: false,
          location:
          {
            latitude: 48.83961,
            longitude: 2.342499,
            zoom: 16,
          },
          max_adults: 8,
          preview_image: 'https://7.react.pages.academy/static/hotel/15.jpg',
          price: 291,
          rating: 4.3,
          title: 'Penthouse, 4-5 rooms + 5 balconies',
          type: 'hotel',
        }],
      );

    return fetchNearbyLoader(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_NEARBY,
          payload: offers,
        });
      });
  });

  it('should make a correct API call to GET /favorites', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offers = [{
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
    },
    {
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
    },
    ];

    const fetchFavoritesLoader = fetchFavorites();

    apiMock
      .onGet(APIRoute.FAVORITES)
      .reply(200,
        [{
          bedrooms: 3,
          city:
          {
            location:
            {
              latitude: 48.85661,
              longitude: 2.351499,
              zoom: 13,
            },
            name: 'Paris',
          },
          description: 'I rent out a very sunny and bright apartment only 7 minutes walking distance to the metro station. The apartment has a spacious living room with a kitchen, one bedroom and a bathroom with mit bath. A terrace can be used in summer.',
          goods:
            ['Towels', 'Fridge', 'Air conditioning', 'Washing machine', 'Breakfast', 'Dishwasher', 'Laptop friendly workspace', 'Coffee machine', 'Washer', 'Baby seat'],
          host:
          {
            avatar_url: 'img/avatar-angelina.jpg',
            id: 25,
            is_pro: true,
            name: 'Angelina',
          },
          id: 1,
          images:
            ['https://7.react.pages.academy/static/hotel/12.jpg', 'https://7.react.pages.academy/static/hotel/18.jpg', 'https://7.react.pages.academy/static/hotel/20.jpg', 'https://7.react.pages.academy/static/hotel/13.jpg', 'https://7.react.pages.academy'],

          is_favorite: false,
          is_premium: false,
          location:
          {
            latitude: 48.83961,
            longitude: 2.342499,
            zoom: 16,
          },
          max_adults: 8,
          preview_image: 'https://7.react.pages.academy/static/hotel/15.jpg',
          price: 291,
          rating: 4.3,
          title: 'Penthouse, 4-5 rooms + 5 balconies',
          type: 'hotel',
        },
        {
          bedrooms: 3,
          city:
          {
            location:
            {
              latitude: 48.85661,
              longitude: 2.351499,
              zoom: 13,
            },
            name: 'Paris',
          },
          description: 'I rent out a very sunny and bright apartment only 7 minutes walking distance to the metro station. The apartment has a spacious living room with a kitchen, one bedroom and a bathroom with mit bath. A terrace can be used in summer.',
          goods:
            ['Towels', 'Fridge', 'Air conditioning', 'Washing machine', 'Breakfast', 'Dishwasher', 'Laptop friendly workspace', 'Coffee machine', 'Washer', 'Baby seat'],
          host:
          {
            avatar_url: 'img/avatar-angelina.jpg',
            id: 25,
            is_pro: true,
            name: 'Angelina',
          },
          id: 1,
          images:
            ['https://7.react.pages.academy/static/hotel/12.jpg', 'https://7.react.pages.academy/static/hotel/18.jpg', 'https://7.react.pages.academy/static/hotel/20.jpg', 'https://7.react.pages.academy/static/hotel/13.jpg', 'https://7.react.pages.academy'],

          is_favorite: false,
          is_premium: false,
          location:
          {
            latitude: 48.83961,
            longitude: 2.342499,
            zoom: 16,
          },
          max_adults: 8,
          preview_image: 'https://7.react.pages.academy/static/hotel/15.jpg',
          price: 291,
          rating: 4.3,
          title: 'Penthouse, 4-5 rooms + 5 balconies',
          type: 'hotel',
        }],
      );

    return fetchFavoritesLoader(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_FAVORITES,
          payload: offers,
        });
      });
  });

  it('should make a correct API call to GET /comments', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const comments = [
      {
        comment: 'We loved it so much, the house, the veiw, the location just great.. Highly reccomend :)',
        date: '2021-06-30T16:51:35.215Z',
        id: 1,
        rating: 3,
        user: {
          avatarUrl: 'https://7.react.pages.academy/static/avatar/7.jpg',
          id: 16,
          isPro: true,
          name: 'Mollie',
        },
      },
      {
        comment: 'We loved it so much, the house, the veiw, the location just great.. Highly reccomend :)',
        date: '2021-06-30T16:51:35.215Z',
        id: 2,
        rating: 5,
        user: {
          avatarUrl: 'https://7.react.pages.academy/static/avatar/7.jpg',
          id: 17,
          isPro: true,
          name: 'Mollie',
        },
      },
    ];

    const id = 1;
    const fetchCommentsLoader = fetchComments(id);

    apiMock
      .onGet(`${APIRoute.COMMENTS}/${id}`)
      .reply(200,
        [{
          comment: 'We loved it so much, the house, the veiw, the location just great.. Highly reccomend :)',
          date: '2021-06-30T16:51:35.215Z',
          id: 1,
          rating: 3,
          user: {
            avatar_url: 'https://7.react.pages.academy/static/avatar/7.jpg',
            id: 16,
            is_pro: true,
            name: 'Mollie',
          },
        },
        {
          comment: 'We loved it so much, the house, the veiw, the location just great.. Highly reccomend :)',
          date: '2021-06-30T16:51:35.215Z',
          id: 2,
          rating: 5,
          user: {
            avatar_url: 'https://7.react.pages.academy/static/avatar/7.jpg',
            id: 17,
            is_pro: true,
            name: 'Mollie',
          },
        },
        ]);

    return fetchCommentsLoader(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_COMMENTS,
          payload: comments,
        });
      });
  });

  it('should make a correct API call to POST /comment', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeComment = { comment: 'test', rating: 4 };
    const id = 1;
    const pushCommentLoader = pushComment(fakeComment, id);

    apiMock
      .onPost(`${APIRoute.COMMENTS}/${id}`, fakeComment)
      .reply(200, [{ fake: true }]);

    return pushCommentLoader(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(0);
      });
  });

});
