import AuthorApi from '../api/mockAuthorApi';
import * as types from './actionTypes';

export function getAuthorsSuccess(authors) {
	return { type: types.GET_AUTHORS_SUCCESS, authors };
}

export function getAuthors() {
	return dispatch => {
		return AuthorApi.getAllAuthors()
			.then(authors => {
				dispatch(getAuthorsSuccess(authors));
			}).catch(error => {
				throw(error);
			});
	};
}