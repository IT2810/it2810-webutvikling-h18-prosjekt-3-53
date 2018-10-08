import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons';
import { colors } from 'styles/colors';
import TaskList from 'components/screens/TaskList';
import Profile from 'components/screens/Profile';

export default MainNavigator = createBottomTabNavigator({
    TaskList: {
        screen: TaskList,
        navigationOptions: {
            tabBarLabel: 'Tasks',
            tabBarIcon: ({tintColor}) => (
                <FontAwesome name='tasks' size={24} color={tintColor} />
            )
        }
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            tabBarLabel: 'Profile',
            tabBarIcon: ({tintColor}) => (
                <FontAwesome name='user' size={24} color={tintColor} />
            )
        }
    }
}, {
    initialRouteName: 'TaskList',
    tabBarOptions: {
        activeTintColor: colors.primary
    }
});