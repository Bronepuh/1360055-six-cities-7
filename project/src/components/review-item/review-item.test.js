import { render, screen } from '@testing-library/react';
import React from 'react';
import ReviewItem from './review-item';

const comment = {
  'comment': 'We loved it so much, the house, the veiw, the location just great.. Highly reccomend :)',
  'date': '2021-06-30T16:51:35.215Z',
  'id': 1,
  'rating': 3,
  'user': {
    'avatarUrl': 'https://7.react.pages.academy/static/avatar/7.jpg',
    'id': 16,
    'isPro': true,
    'name': 'Mollie',
  },
};

describe('Component: ReviewItem', () => {
  it('should render correctly', () => {
    render(<ReviewItem comment={comment} />);
    expect(screen.getByText(/We loved it so much/i)).toBeInTheDocument();
  });
});
