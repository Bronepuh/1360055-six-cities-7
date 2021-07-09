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
  if (!someOffers.length) {
    return [];
  } else {
    return someOffers.filter((offer) => offer.city.name === activeCity);
  }
};

const compareByPriceToHight = function (a, b) {
  return a.price - b.price;
};

const compareByPriceToLow = function (a, b) {
  return b.price - a.price;
};

const compareTopRate = function (a, b) {
  return b.rating - a.rating;
};

const getSortedItems = function (items, compareFn) {
  return [...items].sort(compareFn);
};

const sortByType = function (someCurrentOffers, someType) {
  switch (someType) {
    case SortType.POPULAR: {
      return someCurrentOffers;
    }
    case SortType.TO_HIGHT: {
      return getSortedItems(someCurrentOffers, compareByPriceToHight);
    }
    case SortType.TO_LOW: {
      return getSortedItems(someCurrentOffers, compareByPriceToLow);
    }
    case SortType.TOP_RATE: {
      return getSortedItems(someCurrentOffers, compareTopRate);
    }
    default: {
      return someCurrentOffers;
    }
  }
};

export { getStarRating, getDate, getLocationByName, getOffersByCity, sortByType };
