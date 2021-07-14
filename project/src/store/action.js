import {createAction} from '@reduxjs/toolkit';

const ActionType = {
  SELECT_CITY: 'main/selectCity',
  SET_OFFERS: 'main/setOffers',
  SET_OFFER_BY_ID: 'main/setOfferById',
  SET_NEARBY: 'main/setNearby',
  SET_COMMENTS: 'main/setComments',
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

const requireAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION, (status) => ({
  payload: status,
}));

const logout = createAction(ActionType.LOGOUT);

const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (url) => ({
  payload: url,
}));

export { ActionType, selectCity, setOffers, setOfferById, setNearby, setComments, requireAuthorization, logout, redirectToRoute };
