/* Import of all actions types */
import * as actionTypes from "../../actions/action-types";

/* Import initial state configuration */
import initialState from "../initial-state";

/* Type checking. */
import { Reducer } from 'redux';
import { GithubState } from "../../store/github/types";

/**
 * @function projectDetailReducer => Project detail info management.
 * @param state   => Initial state for project detail`s reducer.
 * @param action  => Action that enters into project detail`s reducer.
 */
const githubRepositoryReducer: Reducer<GithubState> = (
  state: GithubState = initialState.github,
  action
) => {
  switch (action.type) {

    case actionTypes.FETCH_NEWEST_REPOS_SUCCESS: 

    debugger;

    return {
      ...state
    }


    default:
      return state;
  }
};
export default githubRepositoryReducer;