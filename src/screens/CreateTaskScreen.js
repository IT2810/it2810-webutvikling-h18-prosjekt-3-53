import React from 'react';
import {View} from 'react-native';
import {styles} from 'constants/Base';
import CreateTask from 'components/CreateTask';
import {connect} from 'react-redux';
import {addTask} from 'actions';

const mapStateToProps = state => {
    return {...state};
}

class CreateTaskScreen extends React.Component {

    constructor(props) {
        super(props);
        this.createTask = this.createTask.bind(this);
    }

    createTask(title, description, motivation) {
        let id = this.props.tasks.length;
        this.props.dispatch(addTask({
            id: id,
            title: title,
            description: description,
            motivation: motivation
        }));
    }

    render() {
        return (
            <View style={styles.container}>
                <CreateTask onAdd={this.createTask}/>
            </View>
        );
    }
}

export default connect(mapStateToProps)(CreateTaskScreen);