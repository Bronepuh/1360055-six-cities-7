import { React } from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { getStarRating } from '../../common';
import offerType from '../../prop-types/offer.type';
import Spinner from '../spinner/spinner';
import { toggleFavoriteStatus } from '../../store/api-actions';
import { useSelector, useDispatch } from 'react-redux';
import { getAuthorizationStatus } from '../../store/user/selectors';

function Card({ offer, onListHover }) {
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const history = useHistory();

  const dispatch = useDispatch();

  if (offer) {

    const handleCardOver = () => {
      onListHover(offer);
    };

    const handleCardOut = () => {
      onListHover(null);
    };

    const handleFavoriteClick = () => {
      if (authorizationStatus !== AuthorizationStatus.AUTH) {
        history.push(AppRoute.SIGN_IN);
      } else {
        dispatch(toggleFavoriteStatus(offer));
      }
    };

    return (
      <article className='cities__place-card place-card' onMouseEnter={handleCardOver} onMouseLeave={handleCardOut}>
        {offer.isPremium &&
          <div className='place-card__mark'>
            <span>Premium</span>
          </div>}
        <div className='cities__image-wrapper place-card__image-wrapper'>
          <Link to={AppRoute.OFFER + offer.id}>
            <img className='place-card__image' src={offer.previewImage} width='260' height='200' alt='Place image' />
          </Link>
        </div>
        <div className='place-card__info'>
          <div className='place-card__price-wrapper'>
            <div className='place-card__price'>
              <b className='place-card__price-value'>&euro;{offer.price}</b>
              <span className='place-card__price-text'>&#47;&nbsp;night</span>
            </div>
            <button className={offer.isFavorite ? 'place-card__bookmark-button place-card__bookmark-button--active button' : 'place-card__bookmark-button button'} type='button' onClick={handleFavoriteClick}>
              <svg className='place-card__bookmark-icon' width='18' height='19'>
                <use xlinkHref='#icon-bookmark'></use>
              </svg>
              <span className='visually-hidden'>To bookmarks</span>
            </button>
          </div>
          <div className='place-card__rating rating'>
            <div className='place-card__stars rating__stars'>
              <span style={{ width: `${getStarRating(offer.rating)}%` }}></span>
              <span className='visually-hidden'>Rating</span>
            </div>
          </div>
          <h2 className='place-card__name'>
            <Link to={AppRoute.OFFER + offer.id}>Beautiful &amp; luxurious apartment at great location</Link>
          </h2>
          <p className='place-card__type'>Apartment</p>
        </div>
      </article>
    );
  }
  return <Spinner />;
}

Card.propTypes = {
  offer: offerType.isRequired,
  onListHover: PropTypes.func,
};

export default Card;
