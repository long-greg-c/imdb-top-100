import { combineReducers } from 'redux';
import score from './score';
import visibilityFilter from './visibilityFilter';

export default combineReducers({
  score,
  visibilityFilter
});
