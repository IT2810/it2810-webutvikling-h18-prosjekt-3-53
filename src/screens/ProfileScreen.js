import React from 'react';
import { View, Text } from 'react-native';
import { styles } from 'constants/Base';

export default class ProfileScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titleText}>Profile</Text>>
            </View>
        );
    }
}