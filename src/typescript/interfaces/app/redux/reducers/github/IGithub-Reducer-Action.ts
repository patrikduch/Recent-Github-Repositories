import { GithubRepositoryType } from "../../../../../../redux/store/github/types";
import { AnyAction } from "redux";

/**
 * @interface GithubReducerAction => Payload of incoming action of Github repository reducer.
 */
interface IGithubReducerAction extends AnyAction {
    payload: {
        data: {
          items: GithubRepositoryType[]
          itemId: number;
        };
      }
};
  
  
export default IGithubReducerAction;