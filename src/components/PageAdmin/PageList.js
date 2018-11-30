import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Grid } from '@material-ui/core'

import PageListItem from './PageListItem'

class PageList extends Component {

    // Displays a vertical list with project details
    render() {
        return (
            <div>
                {/* <pre>{JSON.stringify(this.props.reduxState.pageReducer)}</pre>
                <pre>{JSON.stringify(this.props.reduxState.choiceReducer.currentChoicesState)}</pre>
                <pre>{JSON.stringify(this.props.reduxState.choiceReducer.choicesState)}</pre> */}

                {/* {this.props.reduxState.pageReducer.pageState.map((page, i) => {
                    return (<PageListItem key={i} page={page}
                        choiceReducer={this.props.reduxState.choiceReducer}
                        />);
                })} */}

                <Grid container>

                    <Grid item sm>
                        {this.props.reduxState.choiceReducer.currentChoicesState.map((choice, i) => {
                            return (
                                <div>
                                    <h4>{choice.choice_text}
                                        <button
                                            class="editButton"
                                            value={choice.id}>
                                            EDIT
                                        </button>
                                        [TO PAGE: {choice.next_page_id}]
                                    </h4>
                                </div>);
                        })}
                        
                    </Grid>

                </Grid>


                <PageListItem
                    pageState={this.props.reduxState.pageReducer.pageState}
                    currentPageState={this.props.reduxState.pageReducer.currentPageState}
                    currentChoicesState={this.props.reduxState.choiceReducer.currentChoicesState}
                    />
            </div>
        );
    }
}

// Makes our project reducer available in our component
const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(PageList);
