import React from "react";
import { connect, ConnectedComponent } from "react-redux";

// Redux actions to map with connected components
import * as githubRepositoryActions from "../../actions/github/github-repository-actions";

// Components to connect
import GithubRepository from "../../../connected-components/github/Github-Repository";

import { bindActionCreators, Dispatch } from "redux";
import { ApplicationState } from "../../reducers";
import { getGithubRepos } from "../../selectors/github/github-repository-selector";

/**
 * @function  mapStateToProps => mapping state from reducer to the  specific component.
 * @param state => New state that will be mapped.
 */
const mapStateToProps = (state: ApplicationState) => {
  return {
    repositories: getGithubRepos(state.github)
  };
};

/**
 * @function mapDispatchToProps => mapping actions to the specific component.
 * @param dispatch => Dispatching new state into Redux store.
 */
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    actions: bindActionCreators(githubRepositoryActions, dispatch),
  };
};

const GithubRepositoryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(
  GithubRepository as ConnectedComponent<
    React.FC,
    Pick<{}, never>
  >
);


export { GithubRepositoryContainer};