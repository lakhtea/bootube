import React from "react";
import { connect } from "react-redux";
import NavBar from "./navbar";
import { logout } from "../../actions/session_actions";
import { fetchVideos } from "../../actions/videos_actions";
import { withRouter } from "react-router";

const mapStateToProps = (state, ownProps) => ({
  ownProps,
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  fetchVideos: () => dispatch(fetchVideos()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));
