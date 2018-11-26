import React, { Component } from 'react';
import { connect } from 'react-redux';

class CharacterCreate extends Component {

    submitForm = (event) => {
        // Stops the page from refreshing
        event.preventDefault();
        // Send the data to the server!
        const action = { 
                         type: 'ADD_CHARACTER', 
                         payload: this.props.reduxState.charactercreation.characterToAdd,
                       };
        this.props.dispatch(action);
    }

    onHandleChange = (event) => {
        console.log(event.target.name);
        const action = { type: 'UPDATE_PROPERTY', 
                         payload: {
                             key: event.target.name,
                             value: event.target.value
                            }
                        };
        this.props.dispatch(action);
    }

    // Renders the entire app on the DOM
    render() {
        return (
            <div className="App">
                <p>Character Name:</p>
                <pre>TEST{JSON.stringify(this.props.reduxState.charactercreation)}</pre>
                <pre>TEST:{JSON.stringify(this.props.reduxState.charactercreation.characterToAdd.character_name)}</pre>

                <form onSubmit={this.submitForm}>
                    <input type="text" onChange={this.onHandleChange} 
                           name="character_name"
                           placeholder="Character Name" />
                    <input type="submit" value="submit" />
                </form>
            </div>
        );
    }
}
// Map the entire store to props (TODO: Only map a single reducer)
const mapReduxStateToProps = (reduxState) => ({
    reduxState
})
export default connect(mapReduxStateToProps)(CharacterCreate);
