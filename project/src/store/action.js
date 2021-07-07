const ActionType = {
  SELECT_CITY: 'main/selectCity',
  SET_OFFERS: 'main/setOffers',
  SET_HOTELS: 'main/setHotels',
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
  setHotels: (hotels) => ({
    type: ActionType.SET_HOTELS,
    payload: hotels,
  }),
};

export { ActionType, ActionCreator };
