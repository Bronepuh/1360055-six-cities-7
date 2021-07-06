const ActionType = {
  SELECT_CITY: 'main/selectCity',
  SET_OFFERS: 'main/setOffers',
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
};

export { ActionType, ActionCreator };
