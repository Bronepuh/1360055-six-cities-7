import {React, useState} from 'react';
import { connect } from 'react-redux';
import ReviewForm from '../review-form/review-form';
import ReviewList from '../review-list/review-list';
import { useParams } from 'react-router-dom';
import { getStarRating } from '../../common';
import { AppRoute } from '../../const';
import { commentGet } from '../../const';
import Map from '../../components/map/map';
import Offers from '../offers/offers';
import stateType from '../../store/stateType';
import {getLocationByName, getOffersByCity} from '../../store/reducer';

const getOffer = function (offers, id) {
  return offers.find((element) => element.id === Number(id));
};

const getNeighbourhoodOffers = function (offers, offer) {
  const newOffers = offers.filter((el) => el.id !== offer.id);
  return newOffers;
};

function Room({state}) {
  const { id } = useParams();
  const [selectedPoint, setSelectedPoint] = useState(null);
  const currentOffer = getOffer(state.offers, id);

  const currentCity = getLocationByName(state);
  const currentOffers = getOffersByCity(state);

  const neighbourhoodOffers = getNeighbourhoodOffers(currentOffers, currentOffer);

  const handleListHover = function (offer) {
    setSelectedPoint(offer);
  };

  const propertyInsideItems = currentOffer.goods.map((good) =>
    <li className='property__inside-item' key={good}>{good}</li>,
  );

  return (
    <div className='page'>
      <header className='header'>
        <div className='container'>
          <div className='header__wrapper'>
            <div className='header__left'>
              <a className='header__logo-link' href={AppRoute.MAIN}>
                <img className='header__logo' src='img/logo.svg' alt='6 cities logo' width='81' height='41' />
              </a>
            </div>
            <nav className='header__nav'>
              <ul className='header__nav-list'>
                <li className='header__nav-item user'>
                  <a className='header__nav-link header__nav-link--profile' href='#'>
                    <div className='header__avatar-wrapper user__avatar-wrapper'>
                    </div>
                    <span className='header__user-name user__name'>Oliver.conner@gmail.com</span>
                  </a>
                </li>
                <li className='header__nav-item'>
                  <a className='header__nav-link' href='#'>
                    <span className='header__signout'>Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className='page__main page__main--property'>
        <section className='property'>
          <div className='property__gallery-container container'>
            <div className='property__gallery'>
              <div className='property__image-wrapper'>
                <img className='property__image' src='img/room.jpg' alt='Photo studio' />
              </div>
              <div className='property__image-wrapper'>
                <img className='property__image' src='img/apartment-01.jpg' alt='Photo studio' />
              </div>
              <div className='property__image-wrapper'>
                <img className='property__image' src='img/apartment-02.jpg' alt='Photo studio' />
              </div>
              <div className='property__image-wrapper'>
                <img className='property__image' src='img/apartment-03.jpg' alt='Photo studio' />
              </div>
              <div className='property__image-wrapper'>
                <img className='property__image' src='img/studio-01.jpg' alt='Photo studio' />
              </div>
              <div className='property__image-wrapper'>
                <img className='property__image' src='img/apartment-01.jpg' alt='Photo studio' />
              </div>
            </div>
          </div>
          <div className='property__container container'>
            <div className='property__wrapper'>
              {currentOffer.isPremium &&
                <div className='property__mark'>
                  <span>Premium</span>
                </div>}
              <div className='property__name-wrapper'>
                <h1 className='property__name'>
                  {currentOffer.title}
                </h1>
                <button className='property__bookmark-button button' type='button'>
                  <svg className='property__bookmark-icon' width='31' height='33'>
                    <use xlinkHref='#icon-bookmark'></use>
                  </svg>
                  <span className='visually-hidden'>To bookmarks</span>
                </button>
              </div>
              <div className='property__rating rating'>
                <div className='property__stars rating__stars'>
                  <span style={{ width: `${getStarRating(currentOffer.rating)}%` }}></span>
                  <span className='visually-hidden'>Rating</span>
                </div>
                <span className='property__rating-value rating__value'>{currentOffer.rating}</span>
              </div>
              <ul className='property__features'>
                <li className='property__feature property__feature--entire'>
                  {currentOffer.type}
                </li>
                <li className='property__feature property__feature--bedrooms'>
                  {currentOffer.bedrooms} Bedrooms
                </li>
                <li className='property__feature property__feature--adults'>
                  Max {currentOffer.maxAdults} adults
                </li>
              </ul>
              <div className='property__price'>
                <b className='property__price-value'>&euro;{currentOffer.price}</b>
                <span className='property__price-text'>&nbsp;night</span>
              </div>
              <div className='property__inside'>
                <h2 className='property__inside-title'>What&apos;s inside</h2>

                <ul className='property__inside-list'>
                  {propertyInsideItems}
                </ul>

              </div>
              <div className='property__host'>
                <h2 className='property__host-title'>Meet the host</h2>
                <div className='property__host-user user'>
                  <div className='property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper'>
                    <img className='property__avatar user__avatar' src={currentOffer.host.avatarUrl} width='74' height='74' alt='Host avatar' />
                  </div>
                  <span className='property__user-name'>
                    {currentOffer.host.name}
                  </span>
                  {currentOffer.host.isPro &&
                    <span className='property__user-status'>
                      Rro
                    </span>}
                </div>
                <div className='property__description'>
                  <p className='property__text'>
                    A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                  </p>
                  <p className='property__text'>
                    An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                  </p>
                </div>
              </div>
              <section className='property__reviews reviews'>
                <h2 className='reviews__title'>Reviews &middot; <span className='reviews__amount'>{commentGet.length}</span></h2>
                <ReviewList comments={commentGet} />
                <ReviewForm />
              </section>
            </div>
          </div>
          <section className='property__map map'>
            <Map city={currentCity} offers={state.offers} currentOffers={currentOffers} selectedPoint={selectedPoint}/>
          </section>
        </section>
        <div className='container'>
          <section className='near-places places'>
            <h2 className='near-places__title'>Other places in the neighbourhood</h2>
            <div className='near-places__list places__list'>
              <Offers offers={neighbourhoodOffers} onListHover={handleListHover}/>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

const mapStateToProps = (state) => ({
  state,
});

Room.propTypes = {
  state: stateType.isRequired,
};

export default connect(mapStateToProps, null)(Room);
