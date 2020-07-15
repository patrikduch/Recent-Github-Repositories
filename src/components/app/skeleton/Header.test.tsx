
import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Header from "./Header";

Enzyme.configure({ adapter: new Adapter() });


describe('<Header />', () => {

    it('renders heading of ReacTJS application', () => {
      const component = shallow(<Header />);
      expect(component.find("header")).toHaveLength(1);
      expect(component.find("NavigationBar")).toHaveLength(1);
    });
});