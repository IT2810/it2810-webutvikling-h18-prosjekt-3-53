import React from 'react';
import { View, Text } from 'react-native';
import { shallow } from 'enzyme';
import TestComponent from 'components/TestComponent';

const wrapper = shallow(<TestComponent />)

describe('TestComponent', () => {
    it('should render 1 view component', () => {
        expect(wrapper.find(View)).toHaveLength(1);
    });
    it('should render 2 text components', () => {
        expect(wrapper.find(Text)).toHaveLength(2);
    });
});