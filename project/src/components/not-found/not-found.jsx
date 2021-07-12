import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import '../not-found/not-found.css';

function NotFound() {

  return (
    <div className="not-found">
      <div className="not-found__message">
        <span className="not-found__title">Error 404.</span>
        <span className="not-found__subtitle">Page not found</span>
      </div>
      <Link className="not-found__link" to={AppRoute.MAIN}>Go to main page</Link>
    </div>
  );
}

export default NotFound;
