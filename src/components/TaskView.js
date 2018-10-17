import React from 'react';
import { Modal, Text, View, Button } from 'react-native';
import { styles } from 'constants/Base';

class TaskView extends React.Component {

    render() {

        let task = this.props.task;
        if (!task) {
            return <Text>No task selected</Text>;
        }

        return (
            <Modal
                animationType='slide'
                transparent={false}
                visible={this.props.modalVisible}>
                <View style={styles.container}>
                    <Text>{task.title}</Text>
                    <Button
                        onPress={this.props.discard}
                        title='Discard'
                    />
                </View>
            </Modal>
        )
    }

}

export default TaskView;