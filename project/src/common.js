import { SortType, AuthorizationStatus } from './const';

const isCheckedAuth = (authorizationStatus) =>
  authorizationStatus === AuthorizationStatus.UNKNOWN;

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

const parseHotelToState = function (hotel) {
  return {
    bedrooms: hotel.bedrooms,
    city: {
      location: {
        lat: hotel.city.location.latitude,
        lng: hotel.city.location.longitude,
        zoom: hotel.city.location.zoom,
      },
      name: hotel.city.name,
    },
    description: hotel.description,
    goods: hotel.goods,
    host: {
      avatarUrl: hotel.host.avatar_url,
      id: hotel.host.id,
      isPro: hotel.host.is_pro,
      name: hotel.host.name,
    },
    id: hotel.id,
    images: hotel.images,
    isFavorite: hotel.is_favorite,
    isPremium: hotel.is_premium,
    location: {
      lat: hotel.location.latitude,
      lng: hotel.location.longitude,
      zoom: hotel.location.zoom,
    },
    maxAdults: hotel.max_adults,
    previewImage: hotel.preview_image,
    price: hotel.price,
    rating: hotel.rating,
    title: hotel.title,
    type: hotel.type,
  };
};

const parseHotelsToState = function (hotels) {
  return hotels.map((hotel) => (parseHotelToState(hotel)));
};

const parseCommentToState = function (comment) {
  return {
    comment: comment.comment,
    date: comment.date,
    id: comment.id,
    rating: comment.rating,
    user: {
      avatarUrl: comment.user.avatar_url,
      id: comment.user.id,
      isPro: comment.user.is_pro,
      name: comment.user.name,
    },
  };
};

const parseCommentsToState = function (comments) {
  return comments.map((comment) => (parseCommentToState(comment)));
};

export { isCheckedAuth, getStarRating, getDate, getLocationByName, getOffersByCity, sortByType, parseHotelsToState, parseHotelToState, parseCommentsToState };
