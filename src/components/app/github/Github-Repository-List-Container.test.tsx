
import React from "react";
import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import GithubRepositoryListContainer from "./Github-Repository-List-Container";

Enzyme.configure({ adapter: new Adapter() });

describe('<GithubRepositoryListContainer />', () => {

    it('renders stylization Github repos listing component', () => {
      const component = mount(<GithubRepositoryListContainer />);
      expect(component.find("Row")).toHaveLength(1);
      expect(component.find("Col")).toHaveLength(1);
    });
  
});