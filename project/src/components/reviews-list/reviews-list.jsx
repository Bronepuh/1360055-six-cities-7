import React from 'react';
import PropTypes from 'prop-types';
import ReviewsItem from '../../components/reviews-item/reviews-item';
import reviewsItemProps from '../reviews-item/reviews-item.props';

function ReviewsList(props) {
  const {comments} = props;

  return (
    <ul className='reviews__list'>
      {comments.map((comment) => <ReviewsItem key={comment.id} comment={comment} />)}
    </ul>
  );
}

ReviewsList.propTypes = {
  comments: PropTypes.arrayOf(reviewsItemProps.isRequired).isRequired,
};

export default ReviewsList;
