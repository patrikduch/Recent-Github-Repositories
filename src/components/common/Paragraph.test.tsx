import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { mount } from 'enzyme';
import Paragraph from './Paragraph';

Enzyme.configure({ adapter: new Adapter() });

describe("Common component: <Paragraph />", () => {
  it('renders common Paragraph component', () => {
    const component = mount(<Paragraph />);
    expect(component.find("p")).toHaveLength(1);
  });
});