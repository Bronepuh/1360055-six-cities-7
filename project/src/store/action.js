const ActionType = {
  SELECT_CITY: 'main/selectCity',
  SHOW_OFFERS: 'main/showOffers',
  RESET_STATE: 'main/resetState',
};

const ActionCreator = {
  selectCity: (selectedCity) => ({
    type: ActionType.SELECT_CITY,
    payload: selectedCity,
  }),
  showOffers: (selectedCity) => ({
    type: ActionType.SHOW_OFFERS,
    payload: selectedCity,
  }),
  resetState: () => ({
    type: ActionType.RESET_STATE,
  }),
};

export { ActionType, ActionCreator };
