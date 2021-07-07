import {React, useState} from 'react';
import PropTypes from 'prop-types';
import SortItem from '../sort-item/sort-item';
import { SortType } from '../../const';

function SortList({ isOpen, onSortTypeSelectClick }) {

  const [activeItem, setActiveItem] = useState(SortType.POPULAR);

  const handleSortItemClick = function (itemName) {
    onSortTypeSelectClick(itemName);
    setActiveItem(itemName);
  };

  return (
    <ul className={isOpen ? 'places__options places__options--custom places__options--opened' : 'places__options places__options--custom'}  >
      {Object.values(SortType).map((type) => <SortItem key={type} itemName={type} activeItem={activeItem} onSortItemClick={handleSortItemClick} />)}
    </ul>
  );
}

SortList.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onSortTypeSelectClick: PropTypes.func.isRequired,
};

export default SortList;
