import * as actionTypes from "../action-types";
import { Dispatch } from "redux";
import * as GithubAPI from '../../../api/end-points/Github-API';

/**
 * @function fetchNewestRepos => Action creator for fetching newest Github repositories.
 */
export const fetchNewestRepos = () => async (dispatch: Dispatch) => {
  try {
    const response = await GithubAPI.fetchNewestRepos();

    dispatch({
      type: actionTypes.FETCH_NEWEST_REPOS_SUCCESS,
      payload: response,
    });
  } catch {
    dispatch({
      type: actionTypes.FETCH_NEWEST_REPOS_FAILURE,
      payload: {
        data: {
  
        },
      },
    });
  }
};

/**
 * @function incrementStarRating => Action creator that increments number of stars from particular selected item.
 * @param itemId => numeric item identifier.
 */
export const incrementStarRating = (itemId: number) => ({
  type: actionTypes.INCREMENT_REPO_RATING,
  payload: {
    data: {
      itemId
    }
  }
});

