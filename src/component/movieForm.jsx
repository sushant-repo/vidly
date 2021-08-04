import React, { Component } from "react";

export default class MovieForm extends Component {
  render() {
    const { match, history } = this.props;
    return (
      <React.Fragment>
        <h1>MovieForm - {match.params.id}</h1>
        <button
          className="btn btn-primary"
          onClick={() => history.push("/movies")}
        >
          Save
        </button>
      </React.Fragment>
    );
  }
}
