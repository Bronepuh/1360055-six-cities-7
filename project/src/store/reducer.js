import { ActionType } from './action';
import { CITIES } from '../const';
import { AuthorizationStatus } from '../const';

const DEFAULT_CITY = 'Paris';

const initialState = {
  activeCity: DEFAULT_CITY,
  cities: CITIES,
  offers: [],
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  isDataLoaded: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SELECT_CITY: {
      return {
        ...state,
        activeCity: action.payload,
      };
    }
    case ActionType.SET_OFFERS: {
      return {
        ...state,
        offers: action.payload,
        isDataLoaded: true,
      };
    }
    case ActionType.REQUIRED_AUTHORIZATION: {
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    }
    case ActionType.LOGOUT: {
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      };
    }
    default: {
      return state;
    }
  }
};

export { reducer };
