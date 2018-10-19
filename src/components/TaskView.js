import React from 'react';
import { Modal, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { completeTask, closeTask } from 'actions';
import { styles } from 'constants/Base';
import { colors } from 'constants/Colors';

class TaskView extends React.Component {

    constructor(props) {
        super(props);
        this.completeTask = this.completeTask.bind(this);
        this.closeTask = this.closeTask.bind(this);
    }

    completeTask() {
        let task = this.props.task;
        this.props.dispatch(completeTask(task.id));
        this.props.discard();
    }

    closeTask() {
        let task = this.props.task;
        this.props.dispatch(closeTask(task.id));
        this.props.discard();
    }

    render() {

        let task = this.props.task;
        if (!task) {
            return null;
        }

        return (
            <Modal
                animationType='slide'
                transparent={false}
                visible={this.props.modalVisible}>
                <View style={styles.container}>
                    <Text style={styles.titleText}>{task.title}</Text>
                    <Text>{'description: ' + task.description}</Text>
                    <Text>{'motivation: ' + task.motivation}</Text>
                    <Text>{'status: ' + task.status}</Text>
                    {task.status == 'ACTIVE' && <Button
                        onPress={this.completeTask}
                        title='Complete Task'
                        color={colors.good}
                    />}
                    {task.status == 'ACTIVE' && <Button
                        onPress={this.closeTask}
                        title='Close Task'
                        color={colors.bad}
                    />}
                    <Button
                        onPress={this.props.discard}
                        title='Back'
                    />
                </View>
            </Modal>
        )
    }
}

export default connect()(TaskView);