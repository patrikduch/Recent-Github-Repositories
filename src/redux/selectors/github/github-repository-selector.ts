import { createSelector } from "reselect";
import { GithubState } from "../../store/github/types";

const githubState = (state: GithubState ) => state;

const getGithubRepos = createSelector([githubState], (g) => g.repositories);


export { getGithubRepos };