import { combineReducers } from 'redux';

// Used to store characters returned from the server
const pageState = (state = [{page_text: 'Placeholder story text ...'}], action) => {
    switch (action.type) {
        case 'SET_PAGES':
            return action.payload;
        default:
            console.log('pageState REDUCER:', state);
            return state;
    }
}

//currentPage: current page, along with current choice information

const currentPageState = (state = [], action) => {
    switch (action.type) {
        case 'SET_PAGE':
            return action.payload;
        default:
            console.log('currentPageState REDUCER:', state);
            return state;
    }
}

// Store the project that we plan to add to the database
const pageToAdd = (state = {}, action) => {
    switch (action.type) {
        case 'UPDATE_PROPERTY':
            // combine state with the new value from the form
            // action.payload.key is the inputfield
            // action.payload.value is what the user typed
            return { ...state, [action.payload.key]: action.payload.value }
        default:
            console.log('Page To Add:', state);
            return state;
    }
}

// Create one store that all components can use
export default combineReducers({
    pageState,
    pageToAdd,
    currentPageState,
});