import { connect } from "react-redux";
import Results from "./results";
import { onQuery } from "../../actions/search_actions";
import { withRouter } from "react-router";

const mstp = ({ entities }) => {
  return {
    videos: entities.videos,
  };
};

const mdtp = (dispatch) => {
  return { onQuery: (term) => dispatch(onQuery(term)) };
};

export default withRouter(connect(mstp, mdtp)(Results));
