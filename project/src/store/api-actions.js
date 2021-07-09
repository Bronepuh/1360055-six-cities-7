import { ActionCreator } from './action';
import { APIRoute } from '../const';
import { parseDataToState } from '../common';
import { AppRoute, AuthorizationStatus } from '../const';

const fetchHotelList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.HOTELS)
    .then((res) => {
      const adaptedHotels = parseDataToState(res.data);
      dispatch(ActionCreator.setOffers(adaptedHotels));
    })
);

const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() =>  dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => { })
);

const login = ({ login: email, password }) => (dispatch, _getState, api) => (
  api.post('/login', { email, password })
    .then((res) => localStorage.setItem('token', res.data.token))
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoute(AppRoute.FAVORITES)))
);

const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(ActionCreator.logout()))
);

export { fetchHotelList, checkAuth, login, logout };
