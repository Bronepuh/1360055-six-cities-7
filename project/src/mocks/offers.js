const AVATAR_URL = 'https://i.pravatar.cc/128';

const offers = [
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: "Amsterdam"
    },
    description: "A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.",
    goods: ["Heating", "Kitchen", "Cable TV", "Washing machine", "Coffee machine", "Dishwasher"],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 3,
      isPro: false,
      name: "Angelina"
    },
    id: 0,
    images: ["img/1.png", "img/2.png"],
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: "img/apartment-01.jpg",
    price: 120,
    rating: 4.8,
    title: "Beautiful & luxurious studio at great location",
    type: "Apartment"
  },
  {
    bedrooms: 2,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: "Brussels"
    },
    description: "A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.",
    goods: ["Heating", "Kitchen", "Washing machine", "Coffee machine", "Wi-Fi"],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 3,
      isPro: true,
      name: "Natalia"
    },
    id: 1,
    images: ["img/1.png", "img/2.png"],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    maxAdults: 3,
    previewImage: "img/apartment-02.jpg",
    price: 180,
    rating: 3.8,
    title: "Beautiful & luxurious studio at great location",
    type: "Apartment"
  },
  {
    bedrooms: 2,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: "Cologne"
    },
    description: "A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.",
    goods: ["Heating", "Kitchen", "Washing machine", "Coffee machine", "Wi-Fi"],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 2,
      isPro: true,
      name: "Natalia"
    },
    id: 2,
    images: ["img/1.png", "img/2.png"],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    maxAdults: 3,
    previewImage: "img/apartment-03.jpg",
    price: 240,
    rating: 2,
    title: "Beautiful & luxurious studio at great location",
    type: "Apartment"
  },
  {
    bedrooms: 2,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: "Cologne"
    },
    description: "A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.",
    goods: ["Heating", "Kitchen", "Washing machine", "Coffee machine", "Wi-Fi"],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 3,
      isPro: true,
      name: "Natalia"
    },
    id: 3,
    images: ["img/1.png", "img/2.png"],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    maxAdults: 3,
    previewImage: "img/apartment-small-04.jpg",
    price: 100,
    rating: 5,
    title: "Beautiful & luxurious studio at great location",
    type: "Apartment"
  },
];

export default offers;
