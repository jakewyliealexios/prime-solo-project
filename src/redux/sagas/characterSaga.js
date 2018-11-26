// Import saga middleware
import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator functionc 
function* characterSaga() {
    yield takeEvery('ADD_CHARACTER', postCharacter);
    yield takeEvery('FETCH_CHARACTERS', getCharacters);
}

function* getCharacters() {
    try {
        const response = yield call(axios.get, '/character');
        const action = {type: 'SET_CHARACTERS', payload: response.data};
        yield put(action);
    } catch (error) {
        console.log(error);
        alert('Unable to get characters');
    }
}

function* postCharacter(action) {
    try {
        yield call(axios.post, '/character', action.payload);
        // TODO: Add our GET saga
        yield put({type: 'FETCH_CHARACTERS'});
    } catch (error) {
        console.log(error);
        alert('Unable to add character ...');
    }
}

export default characterSaga;
