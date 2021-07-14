import { connect } from "react-redux";
import Searchbar from "./searchbar";
import { onQuery } from "../../actions/search_actions";
import { withRouter } from "react-router";

const mapDispatchToProps = (dispatch) => ({
  onTermSubmit: (term) => dispatch(onQuery(term)),
});

export default withRouter(connect(null, mapDispatchToProps)(Searchbar));
