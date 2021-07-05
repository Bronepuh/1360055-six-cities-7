import {React, useState} from 'react';
import PropTypes from 'prop-types';
import SortList from '../sort-list/sort-list';

function SortForm({handleSortTypeSelect}) {
  const [isOpen, setIsOpen] = useState(false);
  const toogleSortMenu = () => setIsOpen (!isOpen);
  const onSortBtnClick = function () {
    toogleSortMenu();
  };

  return (
    <form className='places__sorting' action='#' method='get'>
      <span className='places__sorting-caption'>Sort by</span>
      <span className='places__sorting-type' tabIndex='0' onClick={onSortBtnClick}>
        Popular
        <svg className='places__sorting-arrow' width='7' height='4'>
          <use xlinkHref='#icon-arrow-select'></use>
        </svg>
      </span>
      <SortList handleSortTypeSelect={handleSortTypeSelect} isOpen={isOpen}/>
    </form>
  );
}

SortForm.propTypes = {
  handleSortTypeSelect: PropTypes.func.isRequired,
};

export default SortForm;
