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

const sortByDefault = function (someOffers) {
  return someOffers;
};

const sortByPriceToHigh = function (someOffers) {
  const sortedOffers = someOffers.sort((someOfferA, someOfferB) => someOfferA.price - someOfferB.price);
  return sortedOffers;
};

const sortByPriceToLow = function (someOffers) {
  const sortedOffers = someOffers.sort((someOfferA, someOfferB) => someOfferB.price - someOfferA.price);
  return sortedOffers;
};

const sortByRatingFromTop = function (someOffers) {
  const sortedOffers = someOffers.sort((someOfferA, someOfferB) => someOfferB.rating - someOfferA.rating);
  return sortedOffers;
};

const sortBySortType = function (someCurrentOffers, someType) {
  switch (someType) {
    case 'Popular': {
      return sortByDefault(someCurrentOffers);
    }
    case 'Price: low to high': {
      return sortByPriceToHigh(someCurrentOffers);
    }
    case 'Price: high to low': {
      return sortByPriceToLow(someCurrentOffers);
    }
    case 'Top rated first': {
      return sortByRatingFromTop(someCurrentOffers);
    }
    default: {
      return sortByDefault(someCurrentOffers);
    }
  }
};

export { getStarRating, getDate, sortByDefault, sortByPriceToHigh, sortByPriceToLow, sortByRatingFromTop, sortBySortType};
