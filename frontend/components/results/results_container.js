import { connect } from "react-redux";
import Results from "./results";
import { onQuery, query } from "../../actions/search_actions";
import { withRouter } from "react-router";

const mstp = ({ entities }) => {
  return {
    videos: entities.videos,
    users: entities.users,
  };
};

const mdtp = (dispatch) => {
  return {
    onQuery: (term) => dispatch(onQuery(term)),
    query: (term) => dispatch(query(term)),
  };
};

export default withRouter(connect(mstp, mdtp)(Results));
