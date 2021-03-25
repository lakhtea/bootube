import { connect } from "react-redux";
import Searchbar from "./searchbar";
import { onQuery } from "../../actions/search_actions";

const mapDispatchToProps = (dispatch) => ({
  onTermSubmit: (term) => dispatch(onQuery(term)),
});

export default connect(null, mapDispatchToProps)(Searchbar);
