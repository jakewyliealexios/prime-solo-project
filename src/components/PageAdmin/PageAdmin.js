import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Grid } from '@material-ui/core'
import './pageAdmin.css';

import PageList from './PageList';


class PageAdmin extends Component {
    componentDidMount() {
        this.props.dispatch({type: 'FETCH_PAGES'});
    }

    // Displays a vertical list with page details
    render() {
        return (
            <div>
                {/* <pre>In PageAdmin:{JSON.stringify(this.props)}</pre> */}
                {/* <Link className="nav-link" to="/pagecreate">
                    Create New Story Page
                </Link> */}
                <Grid container>
                    <Grid item sm>
                    </Grid>
                    <Grid item sm>
                        <button
                            class="newButton"
                            >
                            CREATE NEW STORY PAGE
                        </button>
                    </Grid>
                    <Grid item sm>
                    </Grid>
                </Grid>

                <PageList />
            </div>
        );
    }
}

export default connect()(PageAdmin);
