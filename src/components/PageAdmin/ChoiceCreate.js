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
        this.props.history.push('/pageadmin');
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

    goBack = ( event, props ) => {
        this.props.history.push('/pageadmin');
    }


    // Renders the entire app on the DOM
    render() {
        return (
            <div className="App">
                <p>Choice Create:</p>
                {/* <pre>pageReducer:{JSON.stringify(this.props.reduxState.pageReducer)}</pre>
                <pre>choiceReducer:{JSON.stringify(this.props.reduxState.choiceReducer)}</pre>
                <pre>{JSON.stringify(this.props.reduxState.choiceReducer.currentChoicesState)}</pre>
                <pre>TEST:{JSON.stringify(this.props.reduxState.choiceReducer.choiceToAdd.choice_text)}</pre>
                <pre>TEST:{JSON.stringify(this.props.reduxState.choiceReducer.choiceToAdd.page_id)}</pre>
                <pre>TEST:{JSON.stringify(this.props.reduxState.choiceReducer.choiceToAdd.next_page_id)}</pre> */}


                <form
                    onSubmit={this.submitForm}>

                    <input type="number" 
                        onChange={this.onHandleChange}
                        name="page_id"
                        defaultValue="1"
                        placeholder="This Story Page ID" />

                    <br>
                    </br>


                    <input 
                        type="textarea" 
                        onChange={this.onHandleChange} 
                        name="choice_text"
                        placeholder="Start writing the choice's content..." />
                    <br>
                    </br>
                        
                    <input type="number" 
                        onChange={this.onHandleChange}
                        name="next_page_id"
                        placeholder="Next Story Page ID" />

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
            </div>
        );
    }
}
// Map the entire store to props (TODO: Only map a single reducer)
const mapReduxStateToProps = (reduxState) => ({
    reduxState
})
export default connect(mapReduxStateToProps)(ChoiceCreate);
