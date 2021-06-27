import {React, useState} from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { AppRoute } from '../../const';
import Main from '../main/main';
import SingIn from '../sign-in/sign-in';
import Favorites from '../favorites/favorites';
import Room from '../room/room';
import Error404 from '../not-found/not-found';
import offerProps from '../offers/offer.props';

function App(props) {
  const { offers } = props;
  const [currentPoint, setCurrentPoint] = useState({});

  const getSelectedPoint = function(point) {
    setCurrentPoint(point);
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <Main offers={offers} getSelectedPoint={getSelectedPoint}/>
        </Route>
        <Route exact path={AppRoute.SIGN_IN}>
          <SingIn />
        </Route>
        <Route exact path={AppRoute.FAVORITES}>
          <Favorites offers={offers}/>
        </Route>
        <Route exact path={AppRoute.ROOM_$ID}>
          <Room offers={offers} currentPoint={currentPoint}/>
        </Route>
        <Route>
          <Error404 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  offers: PropTypes.arrayOf(offerProps.isRequired).isRequired,
};

export default App;
