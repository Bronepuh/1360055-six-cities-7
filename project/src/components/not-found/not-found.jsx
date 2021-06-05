import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function NotFound() {

  return (
    <div className="container">
      <h1>
        404.
        <br />
        <small>Page not found</small>
      </h1>
      <Link to={AppRoute.MAIN}>Go to main page</Link>
    </div>
  );
}

export default NotFound;
