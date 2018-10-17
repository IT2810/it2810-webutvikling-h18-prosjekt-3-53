import React from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { setFilter, Filter } from 'actions';
import TaskList from 'components/TaskList';
import TaskView from 'components/TaskView';
import { fonts, padding } from 'constants/Base';
import { colors } from 'constants/Colors';

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
        this.setFilter = this.setFilter.bind(this);
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

    setFilter(filter) {
        this.props.dispatch(setFilter(filter));
    }

    render() {

        let filter = this.props.filter;

        return (
            <View style={styles.container}>
                <View style={styles.filterButtons}>
                    <TouchableHighlight onPress={() => this.setFilter(Filter.SHOW_CLOSED)}>
                        <Text style={[styles.button, filter == 'SHOW_CLOSED' && styles.buttonActive]}>Closed</Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => this.setFilter(Filter.SHOW_ACTIVE)}>
                        <Text style={[styles.button, filter == 'SHOW_ACTIVE' && styles.buttonActive]}>Active</Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => this.setFilter(Filter.SHOW_COMPLETED)}>
                        <Text style={[styles.button, filter == 'SHOW_COMPLETED' && styles.buttonActive]}>Completed</Text>
                    </TouchableHighlight>
                </View>
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

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: padding.lg
    },
    filterButtons: {
      flex: 0,
      flexDirection: 'row',
      justifyContent: 'space-evenly'
    },
    button: {
      fontSize: fonts.lg,
      alignItems: 'center',
      padding: padding.md
    },
    buttonActive: {
      backgroundColor: colors.primary
    }
  });

export default connect(mapStateToProps)(TaskListScreen);
