import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import PageList from './PageList';


class PageAdmin extends Component {
    componentDidMount() {
        this.props.dispatch({type: 'FETCH_PAGES'});
    }

    // Displays a vertical list with page details
    render() {
        return (
            <div>
                <pre>In PageAdmin:{JSON.stringify(this.props)}</pre>

                <PageList />
                <Link className="nav-link" to="/pagecreate">
                    Create New Story Page
                </Link>

            </div>
        );
    }
}

export default connect()(PageAdmin);
