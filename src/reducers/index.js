import { combineReducers } from 'redux';
import courseReducer from './courseReducer';

const rootReducer = combineReducers({
	courses: courseReducer
});

// ES6 shorthand property name { courses: courses }

export default rootReducer;