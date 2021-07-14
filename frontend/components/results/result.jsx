import React, { Component } from "react";

export default class Result extends Component {
  render() {
    const { video } = this.props;
    return <div>{video.title}</div>;
  }
}
