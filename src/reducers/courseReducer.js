import * as types from '../actions/actionTypes';

export default function courseReducer(state = [], action) {
	switch(action.type) {
		case types.GET_COURSES_SUCCESS:
			return action.courses;

		default:
			return state;
	}
}