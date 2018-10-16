import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons';
import { colors } from 'constants/Colors';
import TaskListScreen from 'screens/TaskListScreen';
import CreateTaskScreen from 'screens/CreateTaskScreen';
import ProfileScreen from 'screens/ProfileScreen';

export default MainNavigator = createBottomTabNavigator({
    TaskList: {
        screen: TaskListScreen,
        navigationOptions: {
            tabBarLabel: 'Tasks',
            tabBarIcon: ({tintColor}) => (
                <FontAwesome name='tasks' size={24} color={tintColor} />
            )
        }
    },
    CreateTask: {
        screen: CreateTaskScreen,
        navigationOptions: {
            tabBarLabel: 'New Task',
            tabBarIcon: ({tintColor}) => (
                <FontAwesome name='plus-circle' size={24} color={tintColor} />
            )
        }
    },
    Profile: {
        screen: ProfileScreen,
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