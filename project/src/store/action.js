const ActionType = {
  SELECT_CITY: 'main/selectCity',
  SET_OFFERS: 'main/setOffers',
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
