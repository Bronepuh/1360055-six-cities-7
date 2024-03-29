import { React, useState, useRef } from 'react';
import PropTypes from 'prop-types';

function ReviewForm({ onCommentSubmit }) {
  const [review, setReview] = useState('');
  const [rating, setSetRating] = useState(0);
  const commentRef = useRef();
  const ratingRef = useRef();

  const handleCommentSubmit = function (evt) {
    evt.preventDefault();
    onCommentSubmit({
      comment: commentRef.current.value,
      rating: Number(rating),
    });
  };

  const handleRatingClick = function (evt) {
    setSetRating(evt.target.value);
  };

  return (
    <form className='reviews__form form'
      action='#'
      method='post'
      onSubmit={handleCommentSubmit}
    >
      <label className='reviews__label form__label' htmlFor='review'>Your review</label>
      <div className='reviews__rating-form form__rating'>
        <input
          ref={ratingRef}
          className='form__rating-input visually-hidden'
          name='rating'
          value='5'
          id='5-stars'
          type='radio'
          onClick={handleRatingClick}
        />
        <label htmlFor='5-stars' className='reviews__rating-label form__rating-label' title='perfect'>
          <svg className='form__star-image' width='37' height='33'>
            <use xlinkHref='#icon-star'></use>
          </svg>
        </label>

        <input
          ref={ratingRef}
          className='form__rating-input visually-hidden'
          name='rating'
          value='4'
          id='4-stars'
          type='radio'
          onClick={handleRatingClick}
        />
        <label htmlFor='4-stars' className='reviews__rating-label form__rating-label' title='good'>
          <svg className='form__star-image' width='37' height='33'>
            <use xlinkHref='#icon-star'></use>
          </svg>
        </label>

        <input
          ref={ratingRef}
          className='form__rating-input visually-hidden'
          name='rating'
          value='3'
          id='3-stars'
          type='radio'
          onClick={handleRatingClick}
        />
        <label htmlFor='3-stars' className='reviews__rating-label form__rating-label' title='not bad'>
          <svg className='form__star-image' width='37' height='33'>
            <use xlinkHref='#icon-star'></use>
          </svg>
        </label>

        <input
          ref={ratingRef}
          className='form__rating-input visually-hidden'
          name='rating'
          value='2'
          id='2-stars'
          type='radio'
          onClick={handleRatingClick}
        />
        <label htmlFor='2-stars' className='reviews__rating-label form__rating-label' title='badly'>
          <svg className='form__star-image' width='37' height='33'>
            <use xlinkHref='#icon-star'></use>
          </svg>
        </label>

        <input
          ref={ratingRef}
          className='form__rating-input visually-hidden'
          name='rating'
          value='1'
          id='1-star'
          type='radio'
          onClick={handleRatingClick}
        />
        <label htmlFor='1-star' className='reviews__rating-label form__rating-label' title='terribly'>
          <svg className='form__star-image' width='37' height='33'>
            <use xlinkHref='#icon-star'></use>
          </svg>
        </label>
      </div>
      <textarea
        ref={commentRef}
        className='reviews__textarea form__textarea'
        id='review'
        name='review'
        placeholder='Tell how was your stay, what you like and what can be improved'
        value={review}
        onChange={(evt) => { setReview(evt.target.value); }}
      >
      </textarea>
      <div className='reviews__button-wrapper'>
        <p className='reviews__help'>
          To submit review please make sure to set <span className='reviews__star'>rating</span> and describe your stay with at least <b className='reviews__text-amount'>50 characters</b>.
        </p>
        {review.length < 50 && review.length > 300 && !rating.length &&
          <button className='reviews__submit form__submit button' type='submit' disabled='true'>Submit</button>}

        {review.length > 50 && review.length < 300 && rating.length &&
          <button className='reviews__submit form__submit button' type='submit'>Submit</button>}

      </div>
    </form>);
}

ReviewForm.propTypes = {
  onCommentSubmit: PropTypes.func.isRequired,
};

export default ReviewForm;
