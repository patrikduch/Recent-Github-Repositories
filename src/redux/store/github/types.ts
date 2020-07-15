/**
 * @type GithubRepositoryType => Type anotation for Github repositories collection.
 */
export type GithubRepositoryType = {
   description: string;
   name: string;
   html_url: string;
}

/**
 * @interface GithubState => Type anotation for Github repos reducer.   
 */
export interface GithubState {
   repositories: GithubRepositoryType[]
}