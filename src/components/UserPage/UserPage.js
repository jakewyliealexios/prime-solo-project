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
          user: { props.user.username }
        </h2>

        {/* <p>Your ID is: {props.user.id}</p>
        <pre>{JSON.stringify(props.user.id)}</pre> */}

        {/* <LogOutButton className="log-in" /> */}


      </Grid>
      <Grid item sm>
      </Grid>
    </Grid>

    <Grid container>

      <Grid item sm>
        <Link className="nav-link" to="/charactercreate">
          Create New Character
        </Link>
      </Grid>

      <Grid item sm>
        <Link className="nav-link" to="/pageadmin">
          New Story Page Admin
        </Link>
      </Grid>

      <Grid item sm>
        <Link className="nav-link" to="/pagecreate">
          Create New Story Page
        </Link>
      </Grid>
      <Grid item sm>
        <Link className="nav-link" to="/storypage">
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
