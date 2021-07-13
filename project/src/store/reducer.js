import { ActionType } from './action';
import { CITIES } from '../const';
import { AuthorizationStatus } from '../const';

const DEFAULT_CITY = 'Paris';

const initialState = {
  activeCity: DEFAULT_CITY,
  cities: CITIES,
  offers: [],
  currentOffer: null,
  nearby: [],
  comments: [],
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  isDataLoaded: false,
  isDataOfferByIdLoaded: false,
  isDataNearbyLoaded: false,
  isDataCommentsLoaded: false,
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
    case ActionType.SET_OFFER_BY_ID: {
      return {
        ...state,
        currentOffer: action.payload,
        isDataOfferByIdLoaded: true,
      };
    }
    case ActionType.SET_NEARBY: {
      return {
        ...state,
        nearby: action.payload,
        isDataNearbyLoaded: true,
      };
    }
    case ActionType.SET_COMMENTS: {
      return {
        ...state,
        comments: action.payload,
        isDataCommentsLoaded: true,
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
