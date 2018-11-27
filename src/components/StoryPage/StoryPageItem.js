import React, { Component } from 'react';
import './Story.css';

class StoryPageItem extends Component {

    makeChoice = (event) => {
        // Stops the page from refreshing
        // Send the button click request to the server!
        const action = { 
                         type: 'FETCH_PAGES', 
                         payload: this.props.pageState,
                       };
        // this.props.dispatch(action);
        console.log('action', action);
        
    }



    // Displays details for a single project
    render() {
        
        return (
            <div>
                <div>
                    <h3>Story Page Text:</h3>
                    {this.props.pageState.map((page, i) => {
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
                                <h4>{page.choice_text}</h4>

                                <form class="choiceArea" onSubmit={this.makeChoice}>
                                    {/* <input type="hidden" id="rowid" value={page.next_page_id}/> */}
                                    <input type="number" onChange={this.onHandleChange}
                                        name="hp_adjust"
                                        placeholder="test next_page_id" />
                                    <input type="submit" value="Choose!" />
                                    <button onClick={this.makeChoice(page.next_page_id)}>Choose.</button>
                                    <p>next_page_id: {page.next_page_id}</p>
                                </form>

                            </div>);
                    })}
                    

                </div>
            </div>
        );
    }
}

export default StoryPageItem;
