import { combineReducers } from 'redux';
import courseReducer from './courseReducer';
import authorReducer from './authorReducer';
import ajaxStatusReducer from './ajaxStatusReducer';

const rootReducer = combineReducers({
	courses: courseReducer,
	authors: authorReducer,
	ajaxCalls: ajaxStatusReducer
});

// ES6 shorthand property name { courses: courses }

export default rootReducer;