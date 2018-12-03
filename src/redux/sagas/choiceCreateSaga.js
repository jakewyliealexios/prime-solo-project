// Import saga middleware
import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator functionc 
function* choiceCreateSaga() {
    yield takeEvery('ADD_CHOICE', postChoice);
    yield takeEvery('FETCH_CHOICES', getChoices);
    // yield takeEvery('NEW_CHOICES', getCurrentChoices);
}

function* getChoices() {
    try {
        const response = yield call(axios.get, '/choices');
        const action = {type: 'SET_CHOICES', payload: response.data};
        yield put(action);
    } catch (error) {
        console.log(error);
        alert('Unable to get choices (getChoices)');
    }
}

function* postChoice(action) {
    try {
        yield call(axios.post, '/choices', action.payload);
        // TODO: Add our GET saga
        yield put({type: 'FETCH_CHOICES'});
    } catch (error) {
        console.log(error);
        alert('Unable to add choice (postChoice)');
    }
}

function* putChoice(action) {
    try {
        yield call(axios.put, '/choices', action.payload)
    } catch (error) {
        console.log(error);
        alert('Unable to edit choice (putChoice');
        
    }
}

export default choiceCreateSaga;
