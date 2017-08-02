import { combineReducers } from 'redux';
import courseReducer from './courseReducer';
import authorReducer from './authorReducer';

const rootReducer = combineReducers({
	courses: courseReducer,
	authors: authorReducer
});

// ES6 shorthand property name { courses: courses }

export default rootReducer;