import React from 'react';
import { PropertyImage } from '../property-image/property-image';
import offerType from '../../prop-types/offer.type';

function PropertyGallery({ offer }) {
  return (
    <div className='property__gallery-container container'>
      <div className='property__gallery'>
        {offer.images.map((image) => <PropertyImage key={image} url={image} />)}
      </div>
    </div>
  );
}

PropertyGallery.propTypes = {
  offer: offerType.isRequired,
};

export { PropertyGallery };
