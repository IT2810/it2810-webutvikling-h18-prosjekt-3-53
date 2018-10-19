import React from 'react';
import { View, Text, FlatList, TouchableHighlight } from 'react-native';
import { shallow } from 'enzyme';
import TaskList from 'components/TaskList';
import { Filter } from 'actions';

let tasks = [
    { id: 0, title: 'Task 1', status: 'ACTIVE' },
    { id: 1, title: 'Task 2', status: 'ACTIVE' },
    { id: 2, title: 'Task 3', status: 'ACTIVE' },
    { id: 3, title: 'Task 4', status: 'ACTIVE' },
    { id: 4, title: 'Task 5', status: 'ACTIVE' },
    { id: 5, title: 'Task 6', status: 'ACTIVE' },
];

const wrapper = shallow(<TaskList tasks={tasks} filter={Filter.SHOW_ACTIVE} />)

describe('TaskList', () => {
    it('should render 1 FlatList', () => {
        expect(wrapper.find(FlatList)).toHaveLength(1);
    });
});