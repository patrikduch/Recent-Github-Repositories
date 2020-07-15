
import React from "react";
import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import GithubRepositoryAddStar  from "./Github-Repository-Add-Star";

Enzyme.configure({ adapter: new Adapter() });

describe('<GithubRepositoryAddStar />', () => {

    const fn = jest.fn();
    const props = {
        incrementStarRating: fn 
    };

    it('renders clickable rating star', () => {
      const component = mount(<GithubRepositoryAddStar {...props} />);
      expect(component.find("FontAwesomeIcon")).toHaveLength(1);
    });
  
});