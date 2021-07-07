import { ActionType } from './action';
import { CITIES } from '../const';
import { SortType } from '../const';

const DEFAULT_CITY = 'Amsterdam';

const initialState = {
  activeCity: DEFAULT_CITY,
  cities: CITIES,
  offers: [],
  sortType: SortType.POPULAR,
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
      };
    }
    default: {
      return state;
    }
  }
};

export { reducer };
