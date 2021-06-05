import React from 'react';
import { Link } from 'react-router-dom';

function Error404() {

  return (
    <div className="container">
      <h1>
        404.
        <br />
        <small>Page not found</small>
      </h1>
      <Link to="/">Go to main page</Link>
    </div>
  );
}

export default Error404;
