import { INCREMENT_REPO_RATING } from "../action-types";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { incrementStarRating } from "./github-repository-actions";


Enzyme.configure({ adapter: new Adapter() });

describe("Github repository actions creators ", () => {
  it('incrementStarRating => should create action to increment star-rating', () => {
    const expectedAction = {
        type: INCREMENT_REPO_RATING,
        payload: {
            data: {
              itemId: 1
            }
          }
    }

    expect(incrementStarRating(1)).toEqual(expectedAction);
    
  });
});