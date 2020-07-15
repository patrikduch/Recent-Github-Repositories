import { GithubRepositoryType } from "../../../../../redux/store/github/types";

/**
 * @type GithubRepositoryPropsType  => Type checking for Github repository connected component.
 */
type GithubRepositoryPropsType = {
    repositories: GithubRepositoryType []

    actions: {
      fetchNewestRepos: () => void;
    }
  };
  
  export default GithubRepositoryPropsType;