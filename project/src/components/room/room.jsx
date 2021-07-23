import { React, useEffect, useState } from 'react';
import offerType from '../../prop-types/offer.type';
import { PropTypes } from 'prop-types';
import ReviewForm from '../review-form/review-form';
import ReviewList from '../review-list/review-list';
import { useParams, Link, useHistory } from 'react-router-dom';
import { getStarRating } from '../../common';
import { AppRoute, AuthorizationStatus, APIRoute } from '../../const';
import Spinner from '../spinner/spinner';
import Map from '../../components/map/map';
import Offers from '../offers/offers';
import { getLocationByName } from '../../common';
import { fetchHotelItem, fetchNearby, fetchComments, toggleFavoriteStatus, logout } from '../../store/api-actions';
import { PropertyGallery } from '../property-gallery/property-gallery';
import { useSelector, useDispatch } from 'react-redux';
import { getActiveCity, getCities, getNearby, getComments, getIsDataNearbyLoaded, getIsDataCommentsLoaded } from '../../store/data/selectors';
import { getAuthorizationStatus } from '../../store/user/selectors';
import createAPI from '../../services/api';

const getOffer = (SomeOffers, offerId) => SomeOffers.find((offer) => offer.id === offerId);

const MAX_REVIEWS_COUNT = 10;

const getFilteredReviews = (reviews) => {
  if (reviews.length) {
    const arrayForSort = [...reviews];
    const sortedReviews = arrayForSort.sort((reviewA, reviewB) => new Date(reviewB.date) - new Date(reviewA.date));
    return sortedReviews.slice(0, MAX_REVIEWS_COUNT);
  }
};

function Room({ offers }) {
  const [selectedPoint, setSelectedPoint] = useState(null);
  const [newComment, setNewComment] = useState({ comment: '', rating: '' });
  const [newReqStatus, setNewReqStatus] = useState({ isLoading: false, success: false, error: false });

  const params = useParams();
  const history = useHistory();
  const api = createAPI();

  const currentOffer = getOffer(offers, Number(params.id));
  const activeCity = useSelector(getActiveCity);
  const cities = useSelector(getCities);
  const comments = useSelector(getComments);
  const reviews = getFilteredReviews(comments);
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const nearby = useSelector(getNearby);

  const isDataNearbyLoaded = useSelector(getIsDataNearbyLoaded);
  const isDataCommentsLoaded = useSelector(getIsDataCommentsLoaded);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHotelItem(params.id));
    dispatch(fetchNearby(params.id));
    dispatch(fetchComments(params.id));
  }, [params.id, comments.length, newComment]);

  if (!params.id || !offers.length) {
    return <Spinner />;
  }

  const currentCity = getLocationByName(cities, activeCity);
  const handleListHover = function (offer) {
    setSelectedPoint(offer);
  };

  const propertyInsideItems = currentOffer.goods.map((good) =>
    <li className='property__inside-item' key={good}>{good}</li>,
  );

  const handleCommentSubmit = function (data) {
    setNewReqStatus({
      isLoading: true,
      success: false,
      error: false,
    });

    api.post(`${APIRoute.COMMENTS}/${params.id}`, data)
      .then(() => {
        setNewComment(data);
        setNewReqStatus({
          isLoading: false,
          success: true,
          error: false,
        });
      }).catch(() => {
        setNewReqStatus({
          isLoading: false,
          success: false,
          error: true,
        });
      });
  };

  const handleFavoriteClick = () => {
    if (authorizationStatus !== AuthorizationStatus.AUTH) {
      history.push(AppRoute.SIGN_IN);
    } else {
      dispatch(toggleFavoriteStatus(currentOffer));
    }
  };

  const handleLogout = function (evt) {
    evt.preventDefault();
    dispatch(logout());
  };

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
                {authorizationStatus === AuthorizationStatus.AUTH &&
                  <li className='header__nav-item user'>
                    <Link className='header__nav-link header__nav-link--profile' to={AppRoute.FAVORITES}>
                      <div className='header__avatar-wrapper user__avatar-wrapper'>
                      </div>
                      <span className='header__user-name user__name'>Oliver.conner@gmail.com</span>
                    </Link>
                  </li>}
                {authorizationStatus === AuthorizationStatus.AUTH &&
                  <li className='header__nav-item'>
                    <a className='header__nav-link' onClick={handleLogout} href='#'>
                      <span className='header__signout'>Sign out</span>
                    </a>
                  </li>}
                {authorizationStatus === AuthorizationStatus.NO_AUTH &&
                  <li className='header__nav-item'>
                    <Link className='header__nav-link' to={AppRoute.SIGN_IN}>
                      <span className='header__signout'>Sign in</span>
                    </Link>
                  </li>}
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className='page__main page__main--property'>
        <section className='property'>
          <PropertyGallery offer={currentOffer} />
          <div className='property__container container'>
            <div className='property__wrapper'>
              {currentOffer.isPremium &&
                <div className='property__mark'>
                  <span>Premium</span>
                </div>}
              <div className='property__name-wrapper'>
                <h1 className='property__name'>
                  {currentOffer.title}
                </h1>
                <button className={currentOffer.isFavorite ? 'property__bookmark-button property__bookmark-button--active button' : 'property__bookmark-button button'} type='button' onClick={handleFavoriteClick}>
                  <svg className='property__bookmark-icon' width='31' height='33'>
                    <use xlinkHref='#icon-bookmark'></use>
                  </svg>
                  <span className='visually-hidden'>To bookmarks</span>
                </button>
              </div>
              <div className='property__rating rating'>
                <div className='property__stars rating__stars'>
                  <span style={{ width: `${getStarRating(currentOffer.rating)}%` }}></span>
                  <span className='visually-hidden'>Rating</span>
                </div>
                <span className='property__rating-value rating__value'>{currentOffer.rating}</span>
              </div>
              <ul className='property__features'>
                <li className='property__feature property__feature--entire'>
                  {currentOffer.type}
                </li>
                <li className='property__feature property__feature--bedrooms'>
                  {currentOffer.bedrooms} Bedrooms
                </li>
                <li className='property__feature property__feature--adults'>
                  Max {currentOffer.maxAdults} adults
                </li>
              </ul>
              <div className='property__price'>
                <b className='property__price-value'>&euro;{currentOffer.price}</b>
                <span className='property__price-text'>&nbsp;night</span>
              </div>
              <div className='property__inside'>
                <h2 className='property__inside-title'>What&apos;s inside</h2>

                <ul className='property__inside-list'>
                  {propertyInsideItems}
                </ul>

              </div>
              <div className='property__host'>
                <h2 className='property__host-title'>Meet the host</h2>
                <div className='property__host-user user'>
                  <div className='property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper'>
                    <img className='property__avatar user__avatar' src={currentOffer.host.avatarUrl} width='74' height='74' alt='Host avatar' />
                  </div>
                  <span className='property__user-name'>
                    {currentOffer.host.name}
                  </span>
                  {currentOffer.host.isPro &&
                    <span className='property__user-status'>
                      Rro
                    </span>}
                </div>
                <div className='property__description'>
                  <p className='property__text'>
                    {currentOffer.description}
                  </p>
                </div>
              </div>
              {!isDataCommentsLoaded &&
                <Spinner />}
              {isDataCommentsLoaded &&
                <section className='property__reviews reviews'>
                  <h2 className='reviews__title'>Reviews &middot; <span className='reviews__amount'>{comments.length}</span></h2>
                  <ReviewList comments={reviews} />
                  {newReqStatus.error === true &&
                    <div style={{ color: 'red', textAlign: 'center', marginBottom: '20px' }}>something went wrong, please try again...</div>}
                  {authorizationStatus === AuthorizationStatus.AUTH && newReqStatus.isLoading === false &&
                    <ReviewForm onCommentSubmit={handleCommentSubmit} />}
                </section>}
            </div>
          </div>
          <section className='property__map map'>
            {!isDataNearbyLoaded &&
              <Spinner />}
            {isDataNearbyLoaded &&
              <Map city={currentCity} currentOffers={nearby} selectedPoint={selectedPoint} currentOffer={currentOffer} />}
          </section>
        </section>
        <div className='container'>
          <section className='near-places places'>
            <h2 className='near-places__title'>Other places in the neighbourhood</h2>
            <div className='near-places__list places__list'>
              <Offers offers={nearby} onListHover={handleListHover} />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

Room.propTypes = {
  offers: PropTypes.arrayOf(offerType.isRequired),
};

export default Room;
