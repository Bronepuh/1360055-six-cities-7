import {
  ActionType, selectCity, setOffers, setOfferById, setNearby, setComments, setFavorites, changeFavoriteStatus, requireAuthorization, logout, redirectToRoute
} from './action';


describe('Actions', () => {
  it('action creator for selectCity returns correct action', () => {
    const someCity = 'someCity';
    const expectedAction = {
      type: ActionType.SELECT_CITY,
      payload: 'someCity',
    };

    expect(selectCity(someCity)).toEqual(expectedAction);
  });

  it('action creator for setOffers returns correct action', () => {
    const someOffers = [{fake: true}, {fake: true}];
    const expectedAction = {
      type: ActionType.SET_OFFERS,
      payload: [{fake: true}, {fake: true}],
    };

    expect(setOffers(someOffers)).toEqual(expectedAction);
  });

  it('action creator for setOffers returns correct action with length === 0', () => {
    const someOffers = [];
    const expectedAction = {
      type: ActionType.SET_OFFERS,
      payload: [],
    };

    expect(setOffers(someOffers)).toEqual(expectedAction);
  });

  it('action creator for setOfferById returns correct action', () => {
    const someOffer = {fake: true};
    const expectedAction = {
      type: ActionType.SET_OFFER_BY_ID,
      payload: {fake: true},
    };

    expect(setOfferById(someOffer)).toEqual(expectedAction);
  });

  it('action creator for setNearby returns correct action', () => {
    const someNearby = [{fake: true}, {fake: true}];
    const expectedAction = {
      type: ActionType.SET_NEARBY,
      payload: [{fake: true}, {fake: true}],
    };

    expect(setNearby(someNearby)).toEqual(expectedAction);
  });

  it('action creator for setComments returns correct action', () => {
    const someComments = [{fake: true}, {fake: true}];
    const expectedAction = {
      type: ActionType.SET_COMMENTS,
      payload: [{fake: true}, {fake: true}],
    };

    expect(setComments(someComments)).toEqual(expectedAction);
  });

  it('action creator for setComments returns correct action with length === 0', () => {
    const someComments = [];
    const expectedAction = {
      type: ActionType.SET_COMMENTS,
      payload: [],
    };

    expect(setComments(someComments)).toEqual(expectedAction);
  });

  it('action creator for setFavorites returns correct action', () => {
    const someFavorites = [{fake: true}, {fake: true}];
    const expectedAction = {
      type: ActionType.SET_FAVORITES,
      payload: [{fake: true}, {fake: true}],
    };

    expect(setFavorites(someFavorites)).toEqual(expectedAction);
  });

  it('action creator for changeFavoriteStatus returns correct action', () => {
    const someStatus = {fake: true};
    const expectedAction = {
      type: ActionType.CHANGE_FAVORITE_STATUS,
      payload: {fake: true},
    };

    expect(changeFavoriteStatus(someStatus)).toEqual(expectedAction);
  });

  it('action creator for requireAuthorization returns correct action', () => {
    const someStatus = 'AUTH';
    const expectedAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: 'AUTH',
    };

    expect(requireAuthorization(someStatus)).toEqual(expectedAction);
  });

  it('action creator for logout returns correct action', () => {
    const expectedAction = {
      type: ActionType.LOGOUT,
    };

    expect(logout()).toEqual(expectedAction);
  });

  it('action creator for redirectToRoute returns correct action', () => {
    const url = 'someUrl';
    const expectedAction = {
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: 'someUrl',
    };

    expect(redirectToRoute(url)).toEqual(expectedAction);
  });
});
