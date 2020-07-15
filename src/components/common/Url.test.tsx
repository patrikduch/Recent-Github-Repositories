import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { mount } from 'enzyme';
import Url from './Url';

Enzyme.configure({ adapter: new Adapter() });

describe('Common component: <Url />', () => {
  it('renders common Url component', () => {
    const component = mount(<Url url="URL address" />);
    expect(component.find("a")).toHaveLength(1);

  });
});