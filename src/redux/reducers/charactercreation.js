import { combineReducers } from 'redux';

// Store the project that we plan to add to the database
const characterToAdd = (state = {}, action) => {
    switch (action.type) {
        case 'UPDATE_PROPERTY':
            // combine state with the new value from the form
            // action.payload.key is the inputfield
            // action.payload.value is what the user typed
            return { ...state, [action.payload.key]: action.payload.value }
        default:
            return state;
    }
}

// Create one store that all components can use
export default combineReducers({
    characterToAdd,
});