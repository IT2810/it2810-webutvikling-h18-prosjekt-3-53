// TaskView screen

import React from 'react';
import { View, Text } from 'react-native';
import {styles} from 'styles/base.js';

export default class TaskView extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titleText}>TaskView</Text>>
            </View>
        );
    }
}