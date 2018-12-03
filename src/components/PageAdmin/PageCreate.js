import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Grid, TextField } from '@material-ui/core/TextField';

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
        console.log('action', action);
        this.props.history.push('/pageadmin');
        
    }

    onHandleChange = (event) => {
        console.log('event.target.name is what is being edited:', event.target.name);
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
            <div>

                {/* <pre>PAGE TEXT:{JSON.stringify(this.props.reduxState.pageReducer.pageToAdd.page_text)}</pre>
                <pre>HP ADJUST:{JSON.stringify(this.props.reduxState.pageReducer.pageToAdd.hp_adjust)}</pre> */}

                <form
                    onSubmit={this.submitForm}>

                    <input 
                        type="textarea" 
                        onChange={this.onHandleChange} 
                        name="page_text"
                        placeholder="Start writing the page's content..." />
                    <br>
                    </br>
                        
                    <input type="number" 
                        onChange={this.onHandleChange}
                        name="hp_adjust"
                        placeholder="HP +/0/-" />

                    <br>
                    </br>

                    <button
                        class="newButton"
                        onClick={this.submitForm} 
                        >
                        SAVE
                    </button>   

                    <button
                        class="cancelButton"
                        onClick={this.goBack} 
                        >
                        CANCEL
                    </button>                                      
                                   


                </form>

                {/* <button
                    class="newButton"
                    onClick={this.submitForm} 
                    >
                    SAVE
                </button>                                       */}

            </div>
        );
    }
}
// Map the entire store to props (TODO: Only map a single reducer)
const mapReduxStateToProps = (reduxState) => ({
    reduxState
})
export default connect(mapReduxStateToProps)(PageCreate);
