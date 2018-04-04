import React from 'react';
import { shallow } from 'enzyme';
import LoadingPage from "../../components/LoadingPage";

let wrapper;

beforeEach(() => {
    wrapper = shallow(<LoadingPage />);
});

test('should render LoadingPage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});
