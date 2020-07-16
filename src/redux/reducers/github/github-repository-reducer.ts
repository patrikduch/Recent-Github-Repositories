/* Import of all actions types */
import * as actionTypes from "../../actions/action-types";

/* Import initial state configuration */
import initialState from "../initial-state";

/* Type checking. */
import { Reducer } from 'redux';
import { GithubState } from "../../store/github/types";
import IGithubReducerAction from "../../../typescript/interfaces/app/redux/reducers/github/IGithub-Reducer-Action";

/**
 * @function githubRepositoryReducer => Reducer for managing Github repositories via Redux.
 * @param state   => Initial state for project detail`s reducer.
 * @param action  => Action that enters into Github repositories`s reducer.
 */
const githubRepositoryReducer: Reducer<GithubState, IGithubReducerAction> = (
  state: GithubState = initialState.github,
  action: IGithubReducerAction
) => {
  switch (action.type) {

    case actionTypes.FETCH_NEWEST_REPOS_SUCCESS: 

      return {
        ...state,
        repositories: action.payload.data.items
      }

    case actionTypes.INCREMENT_REPO_RATING:

      const itemIndex = state.repositories.findIndex((obj => obj.id === action.payload.data.itemId));

      let index = state.repositories.findIndex(rep => rep.id === action.payload.data.itemId);
      let updatedRepositories = [...state.repositories];
      updatedRepositories[index] = {...updatedRepositories[index], stargazers_count: state.repositories[itemIndex].stargazers_count + 1};

      return {
        ...state,
        repositories: updatedRepositories
      }
      
    default:
      return state;
  }
};
export default githubRepositoryReducer;