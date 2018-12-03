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

    newPageClick = ( props ) => {
        this.props.history.push('/pagecreate');
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
                            <p>Create a new STORY PAGE by clicking the button ... 
                            </p>
                        </Grid>

                        <Grid item sm>
                            <p>... adding its STORY PAGE ID to the collection below.</p>
                        </Grid>


                    </Grid>
                <div class="pageAdminArea">
                </div>

                <Grid container>
                    <Grid item sm>
                    </Grid>
                    <Grid item sm>
                        <button
                            class="newButton"
                            onClick={this.newPageClick} 
                            >
                            CREATE NEW STORY PAGE
                        </button>
                    </Grid>
                    <Grid item sm>
                    </Grid>
                </Grid>

                <PageList 
                    history={this.props.history}/>
            </div>
        );
    }
}

export default connect()(PageAdmin);
