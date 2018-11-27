import React, { Component } from 'react';
import { connect } from 'react-redux';

class ChoiceCreate extends Component {

    submitForm = (event) => {
        // Stops the page from refreshing
        event.preventDefault();
        // Send the data to the server!
        const action = { 
                         type: 'ADD_CHOICE', 
                         payload: this.props.reduxState.choiceReducer.choiceToAdd,
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
                <p>Choice Create:</p>
                <pre>TEST{JSON.stringify(this.props.reduxState.choiceReducer)}</pre>
                <pre>TEST:{JSON.stringify(this.props.reduxState.choiceReducer.choiceToAdd.choice_text)}</pre>
                <pre>TEST:{JSON.stringify(this.props.reduxState.choiceReducer.choiceToAdd.next_page_id)}</pre>


                <form onSubmit={this.submitForm}>
                    <textarea type="text" onChange={this.onHandleChange} 
                           name="choice_text"
                           placeholder="Start writing this page's choice content..." />
                    {/* <input type="number" onChange={this.onHandleChange}
                            name="next_page_id"
                            placeholder="Next Page Id" /> */}
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
export default connect(mapReduxStateToProps)(ChoiceCreate);
