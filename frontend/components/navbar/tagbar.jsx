import React from "react";
import { connect } from "react-redux";

const mstp = (state) => {
  return {
    sidebar: state.ui.sideBarToggled,
  };
};

const Tagbar = ({ sidebar }) => {
  let tagBarLeft = { left: "72px" };
  if (sidebar) tagBarLeft = { left: "240px" };
  return <div style={tagBarLeft} className="tagbar"></div>;
};

export default connect(mstp, null)(Tagbar);
