import { SortType } from './const';

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

const getLocationByName = function (cities, activeCity) {
  return cities.find((city) => city.name === activeCity);
};

const getOffersByCity = function (someOffers, activeCity) {
  return someOffers.filter((offer) => offer.city.name === activeCity);
};

const sortByPriceToHigh = function (someOffers) {
  const sortedOffers = [...someOffers].sort((someOfferA, someOfferB) => someOfferA.price - someOfferB.price);
  return sortedOffers;
};

const sortByPriceToLow = function (someOffers) {
  const sortedOffers = [...someOffers].sort((someOfferA, someOfferB) => someOfferB.price - someOfferA.price);
  return sortedOffers;
};

const sortByRatingFromTop = function (someOffers) {
  const sortedOffers = [...someOffers].sort((someOfferA, someOfferB) => someOfferB.rating - someOfferA.rating);
  return sortedOffers;
};

const getSortedItems = function (items, compareFn) {
  return [...items].sort(compareFn);
};

const sortBySortType = function (someCurrentOffers, someType) {
  switch (someType) {
    case SortType.POPULAR: {
      return someCurrentOffers;
    }
    case SortType.TO_HIGHT: {
      return getSortedItems(sortByPriceToHigh(someCurrentOffers));
    }
    case SortType.TO_LOW: {
      return getSortedItems(sortByPriceToLow(someCurrentOffers));
    }
    case SortType.TOP_RATE: {
      return getSortedItems(sortByRatingFromTop(someCurrentOffers));
    }
    default: {
      return someCurrentOffers;
    }
  }
};

export { getStarRating, getDate, getLocationByName, getOffersByCity, sortBySortType};
