import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Grid } from '@material-ui/core'

import PageListItem from './PageListItem'
import ChoiceCreate from './ChoiceCreate'

class PageList extends Component {

    componentDidMount() {
        this.props.dispatch({type: 'FETCH_CHOICES'});
    }


    newChoiceClick = ( event, props ) => {        
        this.props.history.push('/choicecreate');
    }


    render() {
        return (
            <div>

                <Grid container>

                    <Grid item sm>
                        <div class="pageAdminArea">
                            {this.props.reduxState.pageReducer.currentPageState.map((page, i) => {
                                return(
                                    <div>
                                        <h3>{page.page_text}</h3>
                                        <Grid container>

                                            <Grid item sm>
                                            </Grid>

                                            <Grid item sm>
                                                <button
                                                    class="newButton"
                                                    name="id"
                                                    onClick={this.newChoiceClick} 
                                                    >
                                                    CREATE NEW CHOICE FOR PAGE {page.id}
                                                </button>                                      
                                            </Grid>

                                            <Grid item sm>
                                            </Grid>

                                        </Grid>
                                    </div>
                                );

                            })}
                        </div>

                    </Grid>
                
                </Grid>

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
