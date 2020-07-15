import React from "react";

import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import NavigationBar from "./Navigation-Bar";


Enzyme.configure({ adapter: new Adapter() });


describe('<NavigationBar />', () => {

    it('renders Reactstrap navigation bar component', () => {
      const component = shallow(<NavigationBar />);
      expect(component.find("Navbar")).toHaveLength(1);
    });
});