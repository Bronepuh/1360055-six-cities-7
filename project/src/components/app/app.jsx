import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { AppRoute } from '../../const';
import Main from '../main/main';
import SingIn from '../sign-in/sign-in';
import Favorites from '../favorites/favorites';
import Room from '../room/room';
import Error404 from '../not-found/not-found';
import offerType from '../../prop-types/offer.type';

function App({ offers }) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <Main />
        </Route>
        <Route exact path={AppRoute.SIGN_IN}>
          <SingIn />
        </Route>
        <Route exact path={AppRoute.FAVORITES}>
          <Favorites offers={offers} />
        </Route>
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
});

App.propTypes = {
  offers: PropTypes.arrayOf(offerType.isRequired).isRequired,
};

export default connect(mapStateToProps, null)(App);
