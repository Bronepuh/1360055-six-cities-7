import React from 'react';
import { getStarRating } from '../../common';
import reviewsItemProps from '../reviews-item/reviews-item.props';

function ReviewsItem(props) {
  const { comment } = props;

  const date = new Date(comment.date);
  const year = date.getUTCFullYear().toString();
  const month = date.toLocaleString('en', { month: 'long' });

  return (
    <li className='reviews__item'>
      <div className='reviews__user user'>
        <div className='reviews__avatar-wrapper user__avatar-wrapper'>
          <img className='reviews__avatar user__avatar' src={comment.user.avatarUrl} width='54' height='54' alt='Reviews avatar' />
        </div>
        <span className='reviews__user-name'>
          {comment.user.name}
        </span>
      </div>
      <div className='reviews__info'>
        <div className='reviews__rating rating'>
          <div className='reviews__stars rating__stars'>
            <span style={{ width: `${getStarRating(comment.rating)}%` }}></span>
            <span className='visually-hidden'>Rating</span>
          </div>
        </div>
        <p className='reviews__text'>
          {comment.comment}
        </p>
        <time className='reviews__time' dateTime={comment.date}>{month} {year}</time>
      </div>
    </li>
  );
}

ReviewsItem.propTypes = {
  comment: reviewsItemProps.isRequired,
};

export default ReviewsItem;
