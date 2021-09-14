import { connect } from "react-redux";
import TrendingResults from "./trending_results";
import { getTrending } from "../../actions/library_actions";

const mapStateToProps = (state) => ({
  videos: Object.values(state.entities.videos),
});

const mapDispatchToProps = (dispatch) => {
  return {
    trending: () => dispatch(getTrending()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TrendingResults);
