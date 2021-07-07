import {React, useState} from 'react';
import PropTypes from 'prop-types';
import SortList from '../sort-list/sort-list';

function SortForm({onSortTypeSelectClick, newSortType}) {
  const [isOpen, setIsOpen] = useState(false);
  const toogleSortMenu = () => setIsOpen (!isOpen);
  const onSortBtnClick = function () {
    toogleSortMenu();
  };

  return (
    <form className='places__sorting' action='#' method='get'>
      <span className='places__sorting-caption'>Sort by&nbsp;</span>
      <span className='places__sorting-type' tabIndex='0' onClick={onSortBtnClick}>
        {newSortType}
        <svg className='places__sorting-arrow' width='7' height='4'>
          <use xlinkHref='#icon-arrow-select'></use>
        </svg>
      </span>
      <SortList onSortTypeSelectClick={onSortTypeSelectClick} isOpen={isOpen}/>
    </form>
  );
}

SortForm.propTypes = {
  onSortTypeSelectClick: PropTypes.func.isRequired,
  newSortType: PropTypes.string.isRequired,
};

export default SortForm;
