import React from 'react';
import { shallow } from 'enzyme';
import Header from "../../components/Header";

test('should render Header correctly', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();

    //example:
    //expect(wrapper.find('selector').text()).toBe('Sometext');

    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();

});