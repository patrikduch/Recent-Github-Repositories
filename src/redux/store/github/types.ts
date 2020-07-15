/**
 * @type GithubRepositoryType => Type anotation for Github repositories collection.
 */
export type GithubRepositoryType = {
   name: string;
}

/**
 * @interface GithubState => Type anotation for Github repos reducer.   
 */
export interface GithubState {
   repositories: GithubRepositoryType[]
}