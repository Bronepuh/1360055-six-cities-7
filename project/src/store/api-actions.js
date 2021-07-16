import { setOffers, setOfferById, setNearby, setComments, setFavorites, requireAuthorization, logout as closeSession, redirectToRoute, changeFavoriteStatus } from './action';
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
  api.get(`${APIRoute.HOTELS}/${id}`)
    .then((res) => {
      const adaptedHotel = parseHotelToState(res.data);
      dispatch(setOfferById(adaptedHotel));
    }).catch(() => dispatch(redirectToRoute(AppRoute.NOT_FOUND))));

const fetchNearby = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.HOTELS}/${id}${APIRoute.NEARBY}`)
    .then((res) => {
      const adaptedHotels = parseHotelsToState(res.data);
      dispatch(setNearby(adaptedHotels));
    }).catch((err) => {
      throw err;
    })
);

const fetchComments = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.COMMENTS}/${id}`)
    .then((res) => {
      const adaptedComments = parseCommentsToState(res.data);
      dispatch(setComments(adaptedComments));
    }).catch((err) => {
      throw err;
    })
);

const fetchFavorites = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FAVORITES)
    .then((res) => {
      const adaptedHotels = parseHotelsToState(res.data);
      dispatch(setFavorites(adaptedHotels));
    }).catch((err) => {
      throw err;
    })
);

const toggleFavoriteStatus = (offer) => (dispatch, _getState, api) => {
  const updatedStatus = offer.isFavorite ? 0 : 1;
  return api.post(`${APIRoute.FAVORITES}/${offer.id}/${updatedStatus}`)
    .then((res) => {
      dispatch(changeFavoriteStatus(parseHotelToState(res.data)));
    }).catch((err) => {
      throw err;
    });
};

const pushComment = (data, id) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.COMMENTS}/${id}`, data)
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

export { fetchHotelList, checkAuth, login, logout, fetchHotelItem, fetchNearby, fetchComments, fetchFavorites, toggleFavoriteStatus, pushComment };
