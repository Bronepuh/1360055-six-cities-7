import { React } from 'react';
import PropTypes from 'prop-types';
import FavoriteList from '../favorite-list/favotite-list';
import { AppRoute } from '../../const';
import offerType from '../../prop-types/offer.type';
import Spinner from '../spinner/spinner';
import { connect } from 'react-redux';
import { logout } from '../../store/api-actions';

function Favorites({offers, isDataLoaded, logoutApp}) {

  const handleLogout = function (evt) {
    evt.preventDefault();
    logoutApp();
  };

  if (isDataLoaded) {
    return (
      <div className='page'>
        <header className='header'>
          <div className='container'>
            <div className='header__wrapper'>
              <div className='header__left'>
                <a className='header__logo-link' href={AppRoute.MAIN}>
                  <img className='header__logo' src='img/logo.svg' alt='6 cities logo' width='81' height='41' />
                </a>
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
            <FavoriteList offers={offers} />
          </div>
        </main>
        <footer className='footer container'>
          <a className='footer__logo-link' href={AppRoute.MAIN}>
            <img className='footer__logo' src='img/logo.svg' alt='6 cities logo' width='64' height='33' />
          </a>
        </footer>
      </div>
    );
  } else {
    return <Spinner />;
  }
}

Favorites.propTypes = {
  offers: PropTypes.arrayOf(offerType.isRequired).isRequired,
};

const mapStateToProps = (state) => ({

  isDataLoaded: state.isDataLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  logoutApp() {
    dispatch(logout());
  },
});

Favorites.propTypes = {
  isDataLoaded: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
