import React, { Component } from 'react';
import { connect } from 'react-redux';

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
                <StoryPageItem
                    choicesState={this.props.reduxState.choiceReducer.choicesState}
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

export default connect(mapReduxStateToProps)(StoryPage);
