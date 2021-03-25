import React from "react";
import { connect } from "react-redux";
import NavBar from "./navbar";
import { logout } from "../../actions/session_actions";
import { fetchVideos } from "../../actions/videos_actions";

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  fetchVideos: () => dispatch(fetchVideos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
