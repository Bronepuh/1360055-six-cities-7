import { createReducer } from '@reduxjs/toolkit';
import { CITIES, DEFAULT_CITY } from '../../const';
import { selectCity, setOffers, setOfferById, setNearby, setComments, setFavorites, changeFavoriteStatus } from '../action';

const initialState = {
  activeCity: DEFAULT_CITY,
  cities: CITIES,
  offers: [],
  currentOffer: null,
  nearby: [],
  comments: [],
  favorites: [],
  isDataLoaded: false,
  isDataOfferByIdLoaded: false,
  isDataNearbyLoaded: false,
  isDataCommentsLoaded: false,
  isFavoritesLoaded: false,
};

const data = createReducer(initialState, (builder) => {
  builder
    .addCase(selectCity, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
      state.isDataLoaded = true;
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
    })
    .addCase(setFavorites, (state, action) => {
      state.favorites = action.payload;
      state.isFavoritesLoaded = true;
    })
    .addCase(changeFavoriteStatus, (state, action) => {
      state.offers = state.offers.map((offer)=> action.payload.id === offer.id ? action.payload : offer);
    });
});

export { data };
