import { ActionType } from './action';
import { CITIES } from '../const';
import offers from '../mocks/offers';

const DEFAULT_CITY = 'Amsterdam';

const getCurrentOffers = function (someOffers, selectedCity) {
  const currentOffers = someOffers.filter((offer) => offer.city.name === selectedCity);
  return currentOffers;
};

const initialState = {
  activeCity: DEFAULT_CITY,
  cities: CITIES,
  offers: offers,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SELECT_CITY:
      return {
        ...state,
        activeCity: action.payload,
      };
    case ActionType.SHOW_OFFERS:
      return {
        ...state,
        offers: getCurrentOffers(offers, action.payload),
      };
    case ActionType.RESET_STATE:
      return {
        ...state,
        offers: action.payload,
      };
    default:
      return state;
  }
};

export { reducer };
