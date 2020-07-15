import React from "react";
import { connect, ConnectedComponent } from "react-redux";

// Redux actions to map with connected components
import * as githubRepositoryActions from "../../actions/github/github-repository-actions";

// Components to connect
import GithubRepository from "../../../connected-components/github/Github-Repository";


import { bindActionCreators, Dispatch } from "redux";

// mapping state from reducer to the  specific component
const mapStateToProps = (state: {}) => {
  return {
    projectDetail: null
  };
};

// mapping actions to the specific component
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    actions: bindActionCreators(githubRepositoryActions, dispatch),
  };
};

const GithubRepositoryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(
  (GithubRepository as unknown) as ConnectedComponent<
    React.FC,
    Pick<{}, never>
  >
);


export { GithubRepositoryContainer};