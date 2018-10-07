import { createBottomTabNavigator } from 'react-navigation';
import TaskList from 'components/screens/TaskList';
import Profile from 'components/screens/Profile';

export default MainNavigator = createBottomTabNavigator({
    TaskList: TaskList,
    Profile: Profile
});