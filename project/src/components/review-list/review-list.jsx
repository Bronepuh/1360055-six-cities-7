import React from 'react';
import PropTypes from 'prop-types';
import ReviewItem from '../../components/review-item/review-item';
import reviewItemProps from '../review-item/review-item.props';

function ReviewList(props) {
  const {comments} = props;

  return (
    <ul className='reviews__list'>
      {comments.map((comment) => <ReviewItem key={comment.id} comment={comment} />)}
    </ul>
  );
}

ReviewList.propTypes = {
  comments: PropTypes.arrayOf(reviewItemProps.isRequired).isRequired,
};

export default ReviewList;
