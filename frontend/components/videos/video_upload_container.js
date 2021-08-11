import { connect } from "react-redux";
import { postVideo } from "../../actions/videos_actions";
import { uploadModal } from "../../actions/ui_actions";
import UploadModal from "./video_upload";
import { withRouter } from "react-router";

const mstp = (state) => {
  return {
    currentUser: state.session.currentUser,
    errors: state.errors,
  };
};

const mdtp = (dispatch) => {
  return {
    action: (formData) => dispatch(postVideo(formData)),
    uploadModal: (isVisible) => dispatch(uploadModal(isVisible)),
  };
};

export default withRouter(connect(mstp, mdtp)(UploadModal));
