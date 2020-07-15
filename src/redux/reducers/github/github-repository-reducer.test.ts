import Enzyme from "enzyme";

import * as actionTypes from "../../actions/action-types";

import Adapter from "enzyme-adapter-react-16";
import githubRepositoryReducer from "./github-repository-reducer";
import IGithubReducerAction from "../../../typescript/interfaces/app/redux/reducers/github/IGithub-Reducer-Action";
import { GithubState } from "../../store/github/types";




Enzyme.configure({ adapter: new Adapter() });

describe("Github Repository Reducer Unit Tests", () => {
  it("should return an empty array, when initial state and action is undefined", () => {

    const action = {
 
    } as IGithubReducerAction;

    expect(githubRepositoryReducer(undefined, action)).toEqual({repositories: []});
    
  });

  it("should update initial state by incrementing current star rating", () => {

    const action = {
      type: actionTypes.INCREMENT_REPO_RATING,
      payload: {
        data: {
          itemId: 1
        }
      }
 
    } as IGithubReducerAction;


    const state: GithubState = {
      repositories: [
        {
          id: 1,
          description: "Brand new repository",
          html_url: "Url of this repository",
          name: "name of this brand new repository",
          stargazers_count: 20
        }
      ]
    };


    expect(githubRepositoryReducer(state, action)).toEqual({
      repositories: [
        {
          id: 1,
          description: "Brand new repository",
          html_url: "Url of this repository",
          name: "name of this brand new repository",
          stargazers_count: 21
        }
      ]
    })
     
  });


});