import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route, Router as BrowserRouter } from 'react-router-dom';
import { AppRoute } from '../../const';
import Main from '../main/main';
import SingIn from '../sign-in/sign-in';
import Favorites from '../favorites/favorites';
import Room from '../room/room';
import Error404 from '../not-found/not-found';
import offerType from '../../prop-types/offer.type';
import PrivateRoute from '../private-route/private-route';
import browserHistory from '../../browser-history';
import Spinner from '../spinner/spinner';
import {AuthorizationStatus} from '../../const';

function App({ offers, authorizationStatus, isDataLoaded }) {

  if (!isDataLoaded && authorizationStatus !== AuthorizationStatus.AUTH) {
    return (
      <Spinner />
    );
  }

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <Main />
        </Route>
        <Route exact path={AppRoute.SIGN_IN}>
          <SingIn />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.FAVORITES}
          render={() => <Favorites offers={offers} />}
        />
        <Route exact path={AppRoute.ROOM_$ID}>
          <Room offers={offers} />
        </Route>
        <Route>
          <Error404 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => ({
  offers: state.offers,
  authorizationStatus: state.authorizationStatus,
  isDataLoaded: state.isDataLoaded,
});

App.propTypes = {
  offers: PropTypes.arrayOf(offerType.isRequired).isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, null)(App);
