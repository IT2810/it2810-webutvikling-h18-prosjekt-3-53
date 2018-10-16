import React from 'react';
import { View, Text } from 'react-native';
import { styles } from 'constants/Base';

export default class CreateTaskScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titleText}>CreateTask</Text>
            </View>
        );
    }
}