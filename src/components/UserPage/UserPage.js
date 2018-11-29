import React from 'react';
import { connect } from 'react-redux';
// import LogOutButton from '../LogOutButton/LogOutButton';

import { Link } from 'react-router-dom';

import { Grid } from '@material-ui/core'

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
const UserPage = (props, classes) => (
  <div>
    <Grid container>
      <Grid item sm>
      </Grid>
      <Grid item sm>
        <h2 id="welcome">
          Welcome, { props.user.username }!
        </h2>
        <h4>Make your selection below...</h4>

      </Grid>
      <Grid item sm>
      </Grid>
    </Grid>

    <Grid container>

      <Grid item sm>
        <Link className="button" to="/charactercreate">
          Create New Character
        </Link>
      </Grid>

      <Grid item sm>
        <Link className="button" to="/pageadmin">
          New Story Page Admin
        </Link>
      </Grid>

      <Grid item sm>
        <Link className="button" to="/pagecreate">
          Create New Story Page
        </Link>
      </Grid>
      <Grid item sm>
        <Link className="button" to="/storypage">
          Jump to Story Demo
        </Link>
      </Grid>


    </Grid>
  </div>
);

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);
