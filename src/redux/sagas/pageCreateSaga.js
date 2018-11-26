// Import saga middleware
import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator functionc 
function* pageCreateSaga() {
    yield takeEvery('ADD_PAGE', postPage);
    yield takeEvery('FETCH_PAGES', getPages);
}

function* getPages() {
    try {
        const response = yield call(axios.get, '/page');
        const action = {type: 'SET_PAGES', payload: response.data};
        yield put(action);
    } catch (error) {
        console.log(error);
        alert('Unable to get pages (getPages)');
    }
}

function* postPage(action) {
    try {
        yield call(axios.post, '/page', action.payload);
        // TODO: Add our GET saga
        yield put({type: 'FETCH_PAGES'});
    } catch (error) {
        console.log(error);
        alert('Unable to add page (postPage)');
    }
}

export default pageCreateSaga;
