import authorApi from '../api/mockAuthorApi';
import * as types from './actionTypes';

export function getAuthorsSuccess(authors) {
	return { type: types.GET_AUTHORS_SUCCESS, authors };
}

export function getAuthors() {
	return dispatch => {
		return authorApi.getAllAuthors()
			.then(authors => {
				dispatch(getAuthorsSuccess(authors));
			}).catch(error => {
				throw(error);
			});
	};
}