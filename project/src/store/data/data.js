import { createReducer } from '@reduxjs/toolkit';
import { CITIES } from '../../const';
import { selectCity, setOffers, setOfferById, setNearby, setComments } from '../action';

const DEFAULT_CITY = 'Paris';

const initialState = {
  activeCity: DEFAULT_CITY,
  cities: CITIES,
  offers: [],
  currentOffer: null,
  nearby: [],
  comments: [],
  isDataLoaded: false,
  isDataOfferByIdLoaded: false,
  isDataNearbyLoaded: false,
  isDataCommentsLoaded: false,
};

const data = createReducer(initialState, (builder) => {
  builder
    .addCase(selectCity, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setOfferById, (state, action) => {
      state.currentOffer = action.payload;
      state.isDataOfferByIdLoaded = true;
    })
    .addCase(setNearby, (state, action) => {
      state.nearby = action.payload;
      state.isDataNearbyLoaded = true;
    })
    .addCase(setComments, (state, action) => {
      state.comments = action.payload;
      state.isDataCommentsLoaded = true;
    });
});

export { data };
