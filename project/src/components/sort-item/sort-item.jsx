import React from 'react';
import PropTypes from 'prop-types';

function SortItem({ itemName, activeItem, handleSortItemClick }) {

  const onSortItemClick = function () {
    handleSortItemClick(itemName);
  };

  return (
    <li className={itemName === activeItem ? 'places__option places__option--active' : 'places__option'} tabIndex='0' onClick={onSortItemClick}>{itemName}</li>
  );
}

SortItem.propTypes = {
  itemName: PropTypes.string.isRequired,
  activeItem: PropTypes.string.isRequired,
  handleSortItemClick: PropTypes.func.isRequired,
};

export default SortItem;
