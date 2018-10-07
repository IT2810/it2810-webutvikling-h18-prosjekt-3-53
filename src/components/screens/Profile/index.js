// Profile screen

import React from 'react';
import { View, Text } from 'react-native';
import {styles} from 'styles/base.js';

export default class Profile extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titleText}>Profile</Text>>
            </View>
        );
    }
}