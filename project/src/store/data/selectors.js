import { NameSpace } from '../root-reducer';

const getActiveCity = (state) => state[NameSpace.DATA].activeCity;
const getCities = (state) => state[NameSpace.DATA].cities;
const getOffers = (state) => state[NameSpace.DATA].offers;
const getNearby = (state) => state[NameSpace.DATA].nearby;
const getComments = (state) => state[NameSpace.DATA].comments;
const getFavorites = (state) => state[NameSpace.DATA].favorites;
const getFavoriteStatus = (state) => state[NameSpace.DATA].isFavorite;
const getIsDataLoaded = (state) => state[NameSpace.DATA].isDataLoaded;
const getIsDataOfferByIdLoaded = (state) => state[NameSpace.DATA].isDataOfferByIdLoaded;
const getIsDataNearbyLoaded = (state) => state[NameSpace.DATA].isDataNearbyLoaded;
const getIsDataCommentsLoaded = (state) => state[NameSpace.DATA].isDataCommentsLoaded;

export { getActiveCity, getCities, getOffers, getNearby, getComments, getFavorites, getFavoriteStatus, getIsDataLoaded, getIsDataOfferByIdLoaded, getIsDataNearbyLoaded, getIsDataCommentsLoaded };
