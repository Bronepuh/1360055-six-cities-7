const MAX_PERCENTS = 100;
const MAX_OFFER_RATING = 5;

const getStarRating = (rating) => {
  const offerRatingInPercents = (Math.round(rating) / MAX_OFFER_RATING) * MAX_PERCENTS;

  return offerRatingInPercents;
};

const getDate = function (comment) {
  const date = new Date(comment.date);
  const year = date.getUTCFullYear().toString();
  const month = date.toLocaleString('en', { month: 'long' });

  return {
    date,
    year,
    month,
  };
};

export { getStarRating, getDate };
