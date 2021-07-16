import { createAction } from '@reduxjs/toolkit';

const ActionType = {
  SELECT_CITY: 'main/selectCity',
  SET_OFFERS: 'main/setOffers',
  SET_OFFER_BY_ID: 'main/setOfferById',
  SET_NEARBY: 'main/setNearby',
  SET_COMMENTS: 'main/setComments',
  SET_FAVORITES: 'main/setFavorites',
  CHANGE_FAVORITE_STATUS: 'main/changeFavoriteStatus',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGOUT: 'user/logout',
  REDIRECT_TO_ROUTE: 'game/redirectToRoute',
};

const selectCity = createAction(ActionType.SELECT_CITY, (selectedCity) => ({
  payload: selectedCity,
}));

const setOffers = createAction(ActionType.SET_OFFERS, (offers) => ({
  payload: offers,
}));

const setOfferById = createAction(ActionType.SET_OFFER_BY_ID, (offer) => ({
  payload: offer,
}));

const setNearby = createAction(ActionType.SET_NEARBY, (offers) => ({
  payload: offers,
}));

const setComments = createAction(ActionType.SET_COMMENTS, (comments) => ({
  payload: comments,
}));

const setFavorites = createAction(ActionType.SET_FAVORITES, (hotels) => ({
  payload: hotels,
}));

const changeFavoriteStatus = createAction(ActionType.CHANGE_FAVORITE_STATUS, (offer) => (
  {
    payload: offer,
  }));

const requireAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION, (status) => ({
  payload: status,
}));

const logout = createAction(ActionType.LOGOUT);

const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (url) => ({
  payload: url,
}));

export { ActionType, selectCity, setOffers, setOfferById, setNearby, setComments, setFavorites, changeFavoriteStatus, requireAuthorization, logout, redirectToRoute };
