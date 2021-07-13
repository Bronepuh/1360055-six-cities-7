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

const ActionCreator = {
  selectCity: (selectedCity) => ({
    type: ActionType.SELECT_CITY,
    payload: selectedCity,
  }),
  setOffers: (offers) => ({
    type: ActionType.SET_OFFERS,
    payload: offers,
  }),
  setOfferById: (offer) => ({
    type: ActionType.SET_OFFER_BY_ID,
    payload: offer,
  }),
  setNearby: (offers) => ({
    type: ActionType.SET_NEARBY,
    payload: offers,
  }),
  setComments: (comments) => (
    {
      type: ActionType.SET_COMMENTS,
      payload: comments,
    }),
  requireAuthorization: (status) => (
    {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status,
    }),
  logout: () => ({
    type: ActionType.LOGOUT,
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
};

export { ActionType, ActionCreator };
