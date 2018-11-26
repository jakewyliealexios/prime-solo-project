import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Grid } from '@material-ui/core'

import StoryPageItem from './StoryPageItem';

class StoryPage extends Component {

    componentDidMount() {
        this.props.dispatch({type: 'FETCH_CHOICES'});
        this.props.dispatch({type: 'FETCH_PAGES'});
    }


    // Displays a vertical list with project details
    render() {
        return (
            <div>
                <pre>{JSON.stringify(this.props.reduxState.choiceReducer)}</pre>

                <pre>{JSON.stringify(this.props.reduxState.pageReducer.pageState[0].page_text)}</pre>

                <pre>{JSON.stringify(this.props.reduxState.choiceReducer.choicesState[0].choice_text)}</pre>
                <pre>{JSON.stringify(this.props.reduxState.choiceReducer.choicesState.choice_text)}</pre>



                {/* {this.props.reduxState.pageReducer.pageState.map((page, i) => {
                    return (<StoryPageItem key={i} page={page} />);
                })} */}
                <StoryPageItem choicesState={this.props.reduxState.choiceReducer.choicesState}/>

                <Grid container>

                </Grid>
            </div>
        );
    }
}

// Makes our project reducer available in our component
const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(StoryPage);
