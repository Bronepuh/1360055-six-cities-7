import React from 'react';
import PropTypes from 'prop-types';
import ReviewItem from '../../components/review-item/review-item';
import reviewType from '../../prop-types/review.type';

function ReviewList({comments}) {

  return (
    <ul className='reviews__list'>
      {comments.map((comment) => <ReviewItem key={comment.id} comment={comment} />)}
    </ul>
  );
}

ReviewList.propTypes = {
  comments: PropTypes.arrayOf(reviewType.isRequired).isRequired,
};

export default ReviewList;
