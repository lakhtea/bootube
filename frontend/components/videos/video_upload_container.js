import { connect } from "react-redux";
import { postVideo } from "../../actions/videos_actions";
import VideoUpload from "./video_upload";

const mstp = (state) => {
    return {
        currentUser: state.session.currentUser,
        errors: state.errors,
    };
};

const mdtp = (dispatch) => {
    return {
        action: (formData) => dispatch(postVideo(formData)),
    };
};

export default connect(mstp, mdtp)(VideoUpload);
