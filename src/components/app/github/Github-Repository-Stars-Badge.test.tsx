
import React from "react";
import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import GithubRepositoryStarsBadge from "./Github-Repository-Stars-Badge";

Enzyme.configure({ adapter: new Adapter() });

describe('<GithubRepositoryStarsBadge />', () => {

    it('renders Github repos rating individually', () => {
      const component = mount(<GithubRepositoryStarsBadge starCount={30}  />);
      expect(component.find("Badge")).toHaveLength(1);
      expect(component.find("FontAwesomeIcon")).toHaveLength(1);
    });

    it('do not render Github repos  with negative star count', () => {
        const component = mount(<GithubRepositoryStarsBadge starCount={-200}  />);
        expect(component === null);
      });
  
});