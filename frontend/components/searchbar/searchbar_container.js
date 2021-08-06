import { connect } from "react-redux";
import Searchbar from "./searchbar";
import { onQuery, query } from "../../actions/search_actions";
import { withRouter } from "react-router";

const mapDispatchToProps = (dispatch) => ({
  onTermSubmit: (term) => dispatch(onQuery(term)),
  onTermSubmitUser: (term) => dispatch(query(term)),
});

export default withRouter(connect(null, mapDispatchToProps)(Searchbar));
