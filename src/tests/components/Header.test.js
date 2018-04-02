import React from 'react';
import { shallow } from 'enzyme';
import { Header } from "../../components/Header";

let wrapper, startLogout;

beforeEach(() => {
    startLogout = jest.fn();
    wrapper = shallow(<Header startLogout={startLogout} />);
});

test('should render Header correctly', () => {
    expect(wrapper).toMatchSnapshot();

    //example:
    //expect(wrapper.find('selector').text()).toBe('Sometext');

    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();

});

test('should call startLogout on button click', () => {
    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled();
});