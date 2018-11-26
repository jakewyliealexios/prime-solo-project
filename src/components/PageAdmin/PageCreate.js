import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

class PageCreate extends Component {

    submitForm = (event) => {
        // Stops the page from refreshing
        event.preventDefault();
        // Send the data to the server!
        const action = { 
                         type: 'ADD_PAGE', 
                         payload: this.props.reduxState.pageReducer.pageToAdd,
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
                <pre>PAGE TEXT:{JSON.stringify(this.props.reduxState.pageReducer.pageToAdd.page_text)}</pre>
                <pre>HP ADJUST:{JSON.stringify(this.props.reduxState.pageReducer.pageToAdd.hp_adjust)}</pre>

                <form onSubmit={this.submitForm}>
                    <textarea type="text" onChange={this.onHandleChange} 
                           name="page_text"
                           placeholder="Start writing the page's content..." />
                    <input type="number" onChange={this.onHandleChange}
                            name="hp_adjust"
                            placeholder="HP +/0/-" />
                    <input type="submit" value="submit" />
                    <Link className="nav-link" to="/choicecreate">
                        Add Choice
                    </Link>
                </form>
            </div>
        );
    }
}
// Map the entire store to props (TODO: Only map a single reducer)
const mapReduxStateToProps = (reduxState) => ({
    reduxState
})
export default connect(mapReduxStateToProps)(PageCreate);
