import React, { useRef } from 'react';
import { login } from '../../store/api-actions';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useSelector, useDispatch } from 'react-redux';
import { getAuthorizationStatus } from '../../store/user/selectors';
import { isCheckedAuth } from '../../common';
import Spinner from '../spinner/spinner';

function SignIn() {
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const loginRef = useRef();
  const passwordRef = useRef();

  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(login({
      login: loginRef.current.value,
      password: passwordRef.current.value,
    }));
  };

  if (isCheckedAuth(authorizationStatus)) {
    return <Spinner />;
  }

  if (authorizationStatus === AuthorizationStatus.AUTH) {
    return (
      <Redirect to={AppRoute.MAIN} />
    );
  }

  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to={AppRoute.MAIN}>
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className='header__nav-item'>
                  <Link className='header__nav-link' to={AppRoute.SIGN_IN}>
                    <span className='header__signout'>Sign in</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={handleSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  ref={loginRef}
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required=""
                  data-testid="email"
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  ref={passwordRef}
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required=""
                  data-testid="password"
                />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default SignIn;
