import { combineReducers } from 'redux';
import { data } from './data/data';
import { user } from './user/user';

const NameSpace = {
  DATA: 'DATA',
  USER: 'USER',
};

export { NameSpace };

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.USER]: user,
});


