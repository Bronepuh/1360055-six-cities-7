const MAX_PERCENTS = 100;
const MAX_OFFER_RATING = 5;

const getStarRaiting = (rating) => {
  const offerRatingInPercents = (Math.round(rating) / MAX_OFFER_RATING) * MAX_PERCENTS;

  return offerRatingInPercents;
};

export { getStarRaiting };
