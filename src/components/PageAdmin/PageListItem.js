import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Grid } from '@material-ui/core'

import { Link } from 'react-router-dom';

import './pageAdmin.css'

class PageListItem extends Component {

    componentDidMount() {
        this.props.dispatch({type: 'FETCH_CHOICES'});
    }

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
                    <Grid container>
                    
                        {this.props.pageState.map((page, i) => {
                            return(
                                
                                <Grid item sm>
                                    {/* {page.id} */}

                                    <button 
                                        class="editButton" 
                                        name="next_page_id" 
                                        value={page.id} 
                                        onClick={this.makeChoice}
                                        >
                                    {page.id}</button>

                                </Grid>);
                        })}
                        
                    </Grid>


                {/* <pre>{JSON.stringify(this.state)}</pre>
                <div>
                    <div class="pageEditRow">
                        <h3>
                            PAGE: {this.props.page.id}
                            <br></br>
                            {this.props.page.page_text}
                        </h3>
                    </div>
                    {this.props.choiceReducer.choicesState.map((choice, i) => {
                        return (
                            <div>
                                <div>
                                    <h4>{choice.choice_text}
                                        <button
                                            class="editButton"
                                            value={choice.id}>
                                            EDIT
                                        </button>
                                        [TO PAGE: {choice.next_page_id}]
                                    </h4>
                                </div>                                
                            </div>);
                    })}
                    <div>
                        <button class="newButton">CREATE NEW CHOICE</button>
                    </div>
                    <br>
                    </br>
                </div> */}
            </div>
        );
    }
}

export default connect()(PageListItem);
