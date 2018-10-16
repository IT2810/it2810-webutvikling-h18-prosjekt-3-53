import React from 'react';
import { View, Text } from 'react-native';
import { styles } from 'constants/Base';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {...state};
}

class TaskListScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titleText}>TaskList</Text>>
            </View>
        );
    }
}

export default connect(mapStateToProps)(TaskListScreen);