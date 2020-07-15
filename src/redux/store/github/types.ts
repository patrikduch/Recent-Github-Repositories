// ./src/store/chat/types.ts

export type GithubRepositoryType = {
   name: string;
}


// Our chat-level state object
export interface GithubState {
   repositories: GithubRepositoryType[]
}