import React from 'react';
import PropTypes from 'prop-types';
import SortItem from '../sort-item/sort-item';
import { SortType } from '../../const';

function SortList({ isOpen, handleSortTypeSelect }) {

  const handleSortItemClick = function (itemName) {
    handleSortTypeSelect(itemName);
  };

  return (
    <ul className={isOpen ? 'places__options places__options--custom places__options--opened' : 'places__options places__options--custom'}  >
      {Object.values(SortType).map((type) => <SortItem key={type} itemName={type} handleSortItemClick={handleSortItemClick} />)}
    </ul>
  );
}

SortList.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleSortTypeSelect: PropTypes.func.isRequired,
};

export default SortList;
