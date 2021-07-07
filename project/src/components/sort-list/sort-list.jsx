import { React } from 'react';
import PropTypes from 'prop-types';
import SortItem from '../sort-item/sort-item';
import { SortType } from '../../const';

function SortList({ isOpen, onSortTypeSelectClick, newSortType }) {

  const handleSortItemClick = function (itemName) {
    onSortTypeSelectClick(itemName);
  };

  return (
    <ul className={isOpen ? 'places__options places__options--custom places__options--opened' : 'places__options places__options--custom'}  >
      {Object.values(SortType).map((type) => <SortItem key={type} itemName={type} activeItem={newSortType} onSortItemClick={handleSortItemClick} />)}
    </ul>
  );
}

SortList.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onSortTypeSelectClick: PropTypes.func.isRequired,
  newSortType: PropTypes.string.isRequired,
};

export default SortList;
