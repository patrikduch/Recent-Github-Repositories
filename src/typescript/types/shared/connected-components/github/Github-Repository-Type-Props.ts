/**
 * @type GithubRepositoryPropsType  => Type checking for Github repository connected component.
 */
type GithubRepositoryPropsType = {
    projectDetail: {
      projectName: string;
    };

    actions: {
      fetchNewestRepos: () => void;
    }
  };
  
  export default GithubRepositoryPropsType;