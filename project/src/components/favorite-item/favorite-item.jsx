import { React } from 'react';
import { getStarRating } from '../../common';
import { toggleFavoriteStatus } from '../../store/api-actions';
import { useDispatch } from 'react-redux';

function FavoriteItem({ offer }) {

  const dispatch = useDispatch();

  const handleFavoriteClick = () => {
    dispatch(toggleFavoriteStatus(offer));
  };

  if (offer) {
    return (
      <article className='favorites__card place-card' key={offer.id}>
        <div className='favorites__image-wrapper place-card__image-wrapper'>
          <a href='#'>
            <img className='place-card__image' src={offer.previewImage} width='150' height='110' alt='Place image' />
          </a>
        </div>
        <div className='favorites__card-info place-card__info'>
          <div className='place-card__price-wrapper'>
            <div className='place-card__price'>
              <b className='place-card__price-value'>&euro;{offer.price}</b>
              <span className='place-card__price-text'>&#47;&nbsp;night</span>
            </div>
            <button className='place-card__bookmark-button place-card__bookmark-button--active button' type='button' onClick={handleFavoriteClick}>
              <svg className='place-card__bookmark-icon' width='18' height='19'>
                <use xlinkHref='#icon-bookmark'></use>
              </svg>
              <span className='visually-hidden'>In bookmarks</span>
            </button>
          </div>
          <div className='place-card__rating rating'>
            <div className='place-card__stars rating__stars'>
              <span style={{ width: `${getStarRating(offer.rating)}%` }}></span>
              <span className='visually-hidden'>Rating</span>
            </div>
          </div>
          <h2 className='place-card__name'>
            <a href='#'>{offer.description}</a>
          </h2>
          <p className='place-card__type'>{offer.type}</p>
        </div>
      </article>
    );
  }
}


export default FavoriteItem;
