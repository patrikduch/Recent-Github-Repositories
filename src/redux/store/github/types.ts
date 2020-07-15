/**
 * @type GithubRepositoryType => Type anotation for Github repositories collection.
 */
export type GithubRepositoryType = {
   description: string;
   html_url: string;
   id: number;
   name: string;
   stargazers_count: number;
}

/**
 * @interface GithubState => Type anotation for Github repos reducer.   
 */
export interface GithubState {
   repositories: GithubRepositoryType[]
}