import { setOffers, setOfferById, setNearby, setComments, requireAuthorization, logout as closeSession, redirectToRoute } from './action';
import { APIRoute } from '../const';
import { parseHotelsToState, parseHotelToState, parseCommentsToState } from '../common';
import { AppRoute, AuthorizationStatus } from '../const';

const fetchHotelList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.HOTELS)
    .then((res) => {
      const adaptedHotels = parseHotelsToState(res.data);
      dispatch(setOffers(adaptedHotels));
    })
);

const fetchHotelItem = (id) => (dispatch, _getState, api) => (
  api.get(APIRoute.HOTEL + id)
    .then((res) => {
      const adaptedHotel = parseHotelToState(res.data);
      dispatch(setOfferById(adaptedHotel));
    }).catch(() => dispatch(redirectToRoute(AppRoute.NOT_FOUND))));

const fetchNearby = (id) => (dispatch, _getState, api) => (
  api.get(APIRoute.HOTEL + id + APIRoute.NEARBY)
    .then((res) => {
      const adaptedHotels = parseHotelsToState(res.data);
      dispatch(setNearby(adaptedHotels));
    }).catch((err) => {
      throw err;
    })
);

const fetchComments = (id) => (dispatch, _getState, api) => (
  api.get(APIRoute.COMMENT + id)
    .then((res) => {
      const adaptedComments = parseCommentsToState(res.data);
      dispatch(setComments(adaptedComments));
    }).catch((err) => {
      throw err;
    })
);

const pushComment = (data, id) => (dispatch, _getState, api) => (
  api.post(APIRoute.COMMENT + id, data)
    .then(api.get(APIRoute.COMMENT + id)));

const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => { })
);

const login = ({ login: email, password }) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, { email, password })
    .then((res) => localStorage.setItem('token', res.data.token))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(AppRoute.FAVORITES)))
);

const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(closeSession()))
);

export { fetchHotelList, checkAuth, login, logout, fetchHotelItem, fetchNearby, fetchComments, pushComment };
