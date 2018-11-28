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
                    START OVER</button>
                </div>
                <div>
                    {/* <h3>Story Page Text:</h3> */}
                    {/* {this.props.pageState.map((page, i) => {
                        return(<h2>{page.page_text}</h2>);
                    })} */}
                    {this.props.currentPageState.map((page, i) => {
                        return(<h2>{page.page_text}</h2>);
                    })}
                    
                </div>

                <div>
                    {/* <h3>Story Page Choice Item A B C:</h3>
                    <pre>{JSON.stringify(this.props.choicesState)}</pre>

                    {this.props.choicesState.map((page, i) => {
                        return (<pre>{JSON.stringify(page.choice_text)}</pre>);
                    })}

                    {this.props.choicesState.map((page, i) => {
                        return (<pre>{JSON.stringify(page.next_page_id)}</pre>);
                    })}                 */}

                    {this.props.choicesState.map((page, i) => {
                        return (
                            <div>
                                {/* <h4>{page.choice_text}</h4> */}
                                <div class="choiceArea">
                                    <button 
                                        class="button" 
                                        name="next_page_id" 
                                        value={page.next_page_id} 
                                        onClick={this.makeChoice}>
                                    {page.choice_text}</button>
                                </div>

                                {/* <form class="choiceArea" onSubmit={this.makeChoice}>
                                    <input type="hidden" id="rowid" value={page.next_page_id}/>
                                    <input type="number" onChange={this.onHandleChange}
                                        name="hp_adjust"
                                        value={page.next_page_id}
                                        placeholder="test next_page_id" />
                                    <input 
                                        type="submit" 
                                        value="Choose!" 
                                        payload={page.next_page_id} />
                                    <p>next_page_id: {page.next_page_id}</p>                                
                                </form> */}


                                

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
