import React, { Component } from 'react';
import { connect } from 'react-redux';
import PageListItem from './PageListItem'

class PageList extends Component {

    // Displays a vertical list with project details
    render() {
        return (
            <div className="content">
                <pre>In PageList.js - </pre>
                <pre>{JSON.stringify(this.props.reduxState.pageReducer)}</pre>
                {this.props.reduxState.pageReducer.pageState.map((page, i) => {
                    return (<PageListItem key={i} page={page} />);
                })}
            </div>
        );
    }
}

// Makes our project reducer available in our component
const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(PageList);
