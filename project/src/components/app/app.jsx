import React from 'react';
import { Switch, Route, Router as BrowserRouter } from 'react-router-dom';
import { AppRoute } from '../../const';
import Main from '../main/main';
import SingIn from '../sign-in/sign-in';
import Favorites from '../favorites/favorites';
import Room from '../room/room';
import Error404 from '../not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import browserHistory from '../../browser-history';
import Spinner from '../spinner/spinner';
import { useSelector } from 'react-redux';
import { getOffers, getIsDataLoaded } from '../../store/data/selectors';
import { getAuthorizationStatus } from '../../store/user/selectors';
import { isCheckedAuth } from '../../common';

function App() {

  const offers = useSelector(getOffers);
  const isDataLoaded = useSelector(getIsDataLoaded);
  const authorizationStatus = useSelector(getAuthorizationStatus);

  if (!isDataLoaded && !offers.length || isCheckedAuth(authorizationStatus)) {
    return (
      <Spinner />
    );
  }

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <Main offers={offers}/>
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
          <Room />
        </Route>
        <Route>
          <Error404 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
