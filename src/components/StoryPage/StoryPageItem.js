import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Story.css';

class StoryPageItem extends Component {

    makeChoice = (event) => {
        // Stops the page from refreshing
        // Send the button click request to the server!
        console.log('makeChoice event.target.name:', event.target.name);
        console.log('makeChoice event.target.value:', event.target.value);
        
        const action = { 
                         type: 'NEW_PAGE_CHOICE',
                         payload: {
                            key: event.target.name,
                            value: event.target.value
                           }
                       };
        this.props.dispatch(action);        
    }



    // Displays details for a single project
    render() {
        
        return (
            <div>

                <div class="startArea">
                    <button 
                        class="startButton" 
                        name="next_page_id" 
                        value="1"
                        onClick={this.makeChoice}>
                    START</button>
                </div>

                <div>
                    {this.props.currentPageState.map((page, i) => {
                        return(<h2>{page.page_text}</h2>);
                    })}
                </div>

                <div>
                    {this.props.currentChoicesState.map((choice, i) => {
                        return (
                            <div>
                                <div class="choiceArea">
                                    <button 
                                        class="button" 
                                        name="next_page_id" 
                                        value={choice.next_page_id} 
                                        onClick={this.makeChoice}>
                                    {choice.choice_text}</button>
                                </div>                                
                            </div>);
                    })}
                </div>

            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
})
export default connect(mapReduxStateToProps)(StoryPageItem);
