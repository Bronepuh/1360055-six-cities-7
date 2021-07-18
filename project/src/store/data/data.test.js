import { data } from './data';
import { CITIES, DEFAULT_CITY } from '../../const';
import { ActionType } from '../action';

describe('Reducer: data', () => {
  it('without additional parameters should return initial state', () => {
    expect(data(undefined, {}))
      .toEqual({
        activeCity: DEFAULT_CITY,
        cities: CITIES,
        offers: [],
        currentOffer: null,
        nearby: [],
        comments: [],
        favorites: [],
        isDataLoaded: false,
        isDataOfferByIdLoaded: false,
        isDataNearbyLoaded: false,
        isDataCommentsLoaded: false,
        isFavoritesLoaded: false,
      });
  });

  it('should update activeCity by selectCity', () => {
    const selectedCity = 'someCity';
    const state = { activeCity: DEFAULT_CITY };
    const selectCity = {
      type: ActionType.SELECT_CITY,
      payload: selectedCity,
    };

    expect(data(state, selectCity))
      .toEqual({ activeCity: selectedCity });
  });

  it('should return current cities', () => {
    const cities = { cities: CITIES };
    const returnCities = {
      payload: cities,
    };

    expect(data(cities, returnCities))
      .toEqual(cities);
  });

  it('should update activeCity by setOffers', () => {
    const offers = [{ fake: true }, { fake: true }];
    const setOffers = {
      payload: offers,
    };

    expect(data(offers, setOffers))
      .toEqual(offers);
  });

  it('should update currentOffer by setOfferById', () => {
    const offer = { fake: true };
    const setOfferById = {
      payload: offer,
    };

    expect(data(offer, setOfferById))
      .toEqual(offer);
  });

  it('should update nearby by setNearby', () => {
    const nearby = [{ fake: true }, { fake: true }];
    const setNearby = {
      payload: nearby,
    };

    expect(data(nearby, setNearby))
      .toEqual(nearby);
  });

  it('should update nearby by setComments', () => {
    const comments = [{ fake: true }, { fake: true }];
    const setComments = {
      payload: comments,
    };

    expect(data(comments, setComments))
      .toEqual(comments);
  });

  it('should update favorites by setFavorites', () => {
    const favorites = [{ fake: true }, { fake: true }];
    const setFavorites = {
      payload: favorites,
    };

    expect(data(favorites, setFavorites))
      .toEqual(favorites);
  });

  it('should update favoriteStatus by changeFavoriteStatus', () => {
    const favoriteStatus = { fake: true };
    const changeFavoriteStatus = {
      payload: favoriteStatus,
    };

    expect(data(favoriteStatus, changeFavoriteStatus))
      .toEqual(favoriteStatus);
  });
});
