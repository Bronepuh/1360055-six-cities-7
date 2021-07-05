const ActionType = {
  SELECT_CITY: 'main/selectCity',
  SHOW_OFFERS: 'main/showOffers',
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
};

export { ActionType, ActionCreator };
