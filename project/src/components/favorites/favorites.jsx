import { React, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import FavoriteList from '../favorite-list/favotite-list';
import { AppRoute } from '../../const';
import offerType from '../../prop-types/offer.type';
import { Link } from 'react-router-dom';
import Spinner from '../spinner/spinner';
import { fetchFavorites, logout } from '../../store/api-actions';
import { useSelector, useDispatch } from 'react-redux';
import { getFavorites } from '../../store/data/selectors';
import { getAuthorizationStatus } from '../../store/user/selectors';
import { AuthorizationStatus } from '../../const';

function Favorites({ offers }) {
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const favorites = useSelector(getFavorites);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavorites());
  }, [offers]);

  const handleLogout = function (evt) {
    evt.preventDefault();
    dispatch(logout());
  };

  if (authorizationStatus !== AuthorizationStatus.AUTH) {
    return <Spinner />;
  }

  return (
    <div className='page'>
      <header className='header'>
        <div className='container'>
          <div className='header__wrapper'>
            <div className='header__left'>
              <Link className='header__logo-link' to={AppRoute.MAIN}>
                <img className='header__logo' src='img/logo.svg' alt='6 cities logo' width='81' height='41' />
              </Link>
            </div>
            <nav className='header__nav'>
              <ul className='header__nav-list'>
                <li className='header__nav-item user'>
                  <a className='header__nav-link header__nav-link--profile' href='#'>
                    <div className='header__avatar-wrapper user__avatar-wrapper'>
                    </div>
                    <span className='header__user-name user__name'>Oliver.conner@gmail.com</span>
                  </a>
                </li>
                <li className='header__nav-item'>
                  <a className='header__nav-link' onClick={handleLogout} href='#'>
                    <span className='header__signout'>Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className='page__main page__main--favorites'>
        <div className='page__favorites-container container'>
          <FavoriteList offers={favorites} />
        </div>
      </main>
      <footer className='footer container'>
        <Link className='footer__logo-link' to={AppRoute.MAIN}>
          <img className='footer__logo' src='img/logo.svg' alt='6 cities logo' width='64' height='33' />
        </Link>
      </footer>
    </div>
  );
}

Favorites.propTypes = {
  offers: PropTypes.arrayOf(offerType.isRequired),
};

export default Favorites;
