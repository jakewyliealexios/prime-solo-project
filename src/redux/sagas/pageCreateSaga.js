// Import saga middleware
import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator functionc 
function* pageCreateSaga() {
    yield takeEvery('ADD_PAGE', postPage);
    yield takeEvery('FETCH_PAGES', getPages);
    yield takeEvery('NEW_PAGE_CHOICE', getPageWithChoices);
}

function* getPages() {
    try {
        const response = yield call(axios.get, '/page');
        const action = {type: 'SET_PAGES', payload: response.data};
        yield put(action);
        yield console.log('getPages response.data', response.data);
        
    } catch (error) {
        console.log(error);
        alert('Unable to get pages (getPages)');
    }
}

//function that makes a single page GET request '/page/next_page_id'
//two yield calls (page and choices) ... to send to a reducer

function* getPageWithChoices(action) {
    yield console.log('getPageWithChoices action.payload', action.payload);
    try {
        const response = yield call(axios.get, `/story/page?next_page_id=${action.payload.value}`);      
        yield console.log('getPageWithChoices response.data', response.data);
        yield console.log('Choice -> page_text:', response.data[0].page_text);
        const currentPage = {type: 'SET_PAGE', payload: response.data};
        yield put(currentPage);
    } catch (error) {
        console.log(error);
        alert('The next page to your adventure is yet to be written!'); 
    }
    try {
        const choiceResponse = yield call(axios.get, `/story/choices?next_page_id=${action.payload.value}`);      
        yield console.log('getCurrentChoices choiceResponse.data', choiceResponse.data);
        const currentChoices = {type: 'SET_CHOICE', payload: choiceResponse.data};
        yield put(currentChoices);
    } catch (error) {
        console.log(error);
        alert('The choices for the next page are yet to be written!'); 
    }
}


function* postPage(action) {
    try {
        yield call(axios.post, '/page', action.payload);
        console.log('postPage action.payload:', action.payload);
        
        // TODO: Add our GET saga
        yield put({type: 'FETCH_PAGES'});
    } catch (error) {
        console.log(error);
        alert('Unable to add page (postPage)');
    }
}

export default pageCreateSaga;
