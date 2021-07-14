import { connect } from "react-redux";
import Results from "./results";

const mstp = ({ entities }) => {
  return {
    videos: entities.videos,
  };
};

const mdtp = (dispatch) => {
  return {};
};

export default connect(mstp, mdtp)(Results);
