import { combineReducers } from 'redux';
import profile from 'reducers/profile';
import tasks from 'reducers/tasks';
import filter from 'reducers/filter';

export default combineReducers({
    profile,
    tasks,
    filter
});