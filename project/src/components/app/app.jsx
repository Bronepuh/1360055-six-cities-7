import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { AppRoute } from '../../const';
import Main from '../main/main';
import SingIn from '../sign-in/sign-in';
import Favorites from '../favorites/favorites';
import Room from '../room/room';
import Error404 from '../not-found/not-found';


function App(props) {
  const { cardsCount } = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <Main cardsCount={cardsCount} />
        </Route>
        <Route exact path={AppRoute.SIGN_IN}>
          <SingIn />
        </Route>
        <Route exact path={AppRoute.FAVORITES}>
          <Favorites />
        </Route>
        <Route exact path={AppRoute.ROOM_$ID}>
          <Room />
        </Route>
        <Route>
          <Error404 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  cardsCount: PropTypes.number,
};

export default App;
