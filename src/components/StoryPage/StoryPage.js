import React, { Component } from 'react';
import { connect } from 'react-redux';

// import { Grid } from '@material-ui/core'

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
                {/* <h3>Story Page Text:</h3>
                <pre>{JSON.stringify(this.props.reduxState.pageReducer.pageState[0].page_text)}</pre> */}

                {/* {this.props.reduxState.pageReducer.pageState.map((page, i) => {
                    return (<StoryPageItem key={i} page={page} />);
                })} */}
                <StoryPageItem
                    choicesState={this.props.reduxState.choiceReducer.choicesState}
                    pageState={this.props.reduxState.pageReducer.pageState}/>

            </div>
        );
    }
}

// Makes our project reducer available in our component
const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(StoryPage);
