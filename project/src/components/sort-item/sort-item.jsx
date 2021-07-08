import React from 'react';
import PropTypes from 'prop-types';

function SortItem({ itemName, activeItem, onSortItemClick }) {

  const handleSortItemClick = function () {
    onSortItemClick(itemName);
  };

  return (
    <li className={itemName === activeItem ? 'places__option places__option--active' : 'places__option'} tabIndex='0' onClick={handleSortItemClick}>{itemName}</li>
  );
}

SortItem.propTypes = {
  itemName: PropTypes.string.isRequired,
  activeItem: PropTypes.string.isRequired,
  onSortItemClick: PropTypes.func.isRequired,
};

export default SortItem;
