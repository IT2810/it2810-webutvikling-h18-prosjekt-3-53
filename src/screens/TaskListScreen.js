import React from 'react';
import { View, Text } from 'react-native';
import { styles } from 'constants/Base';
import { connect } from 'react-redux';
import TaskList from 'components/TaskList';

const mapStateToProps = state => {
    return {...state};
}

class TaskListScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <TaskList tasks={this.props.tasks} filter ={this.props.filter} />
            </View>
        );
    }
}

export default connect(mapStateToProps)(TaskListScreen);
