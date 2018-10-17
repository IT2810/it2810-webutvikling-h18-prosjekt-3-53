import React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from 'constants/Base';
import { connect } from 'react-redux';
import TaskList from 'components/TaskList';
import TaskView from 'components/TaskView';

const mapStateToProps = state => {
    return {...state};
}

class TaskListScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTask: null,
            showSelectedTask: false
        };
        this.selectTask = this.selectTask.bind(this);
        this.discardModal = this.discardModal.bind(this);
    }

    selectTask(id) {
        let task = this.props.tasks.find((task) => {
            return task.id === id;
        });
        if (task) {
            this.setState({
                selectedTask: task,
                showSelectedTask: true
            });
        }
    }

    discardModal() {
        console.log('CLOSE');
        this.setState({
            showSelectedTask: false
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <TaskList
                    tasks={this.props.tasks} filter ={this.props.filter}
                    filter={this.props.filter}
                    selectTask={this.selectTask}
                />
                <TaskView
                    task={this.state.selectedTask}
                    modalVisible={this.state.showSelectedTask}
                    discard={this.discardModal}
                />
            </View>
        );
    }
}

export default connect(mapStateToProps)(TaskListScreen);
