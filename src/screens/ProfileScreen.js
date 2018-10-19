import Expo from 'expo';
import React from 'react';
import {Pedometer} from 'expo';
import {View, Text, Image, StyleSheet, size, Modal} from 'react-native';
import {styles} from 'constants/Base';
import {colors} from 'constants/Colors';
import { setFilter, Filter } from 'actions';

export default class ProfileScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        pastStepCount: 0,
        currentStepCount: 0,
        closedCount: 0,
        completedCount: 0
    };

    componentDidMount() {
        this._subscribe();
    };

    componentWillUnmount() {
        this._unsubscribe();
    };

    _subscribe = () => {
        this._subscription = Pedometer.watchStepCount(result => {
            this.setState({
                currentStepCount: result.steps
            });
        });

        const end = new Date();
        const start = new Date();
        start.setDate(end.getDate() - 1);
        Pedometer.getStepCountAsync(start, end).then(
            result => {
                this.setState({pastStepCount: result.steps});
            },
            error => {
                this.setState({
                    pastStepCount: 'Could not get stepCount: ' + error
                });
            }
        );
    };

    _unsubscribe = () => {
        this._subscription && this._subscription.remove();
        this._subscription = null;
    };

    /*countClosed(){
        let task = this.props.task;
        let closed = new Map();
        if (task.status == 'CLOSED') {
            closed.set('task');
            setState.closedCount = console.log(closed.size);
        }
    };*/



    render() {
        return (
            <View style={styles.container}>
                <View style={styles.body}>
                    <Text style={styles.titleText}>John Doe</Text>
                    {/*<Text style={styles.baseText}>Tasks completed: {this.state.completedCount}</Text>
                    <Text style={styles.baseText}>Tasks closed: {this.state.closedCount}</Text>*/}
                </View>
                <Text style={styles.steps}>Steps taken in the last 24 hours: {this.state.pastStepCount}</Text>
                <Text style={styles.baseText}>Step count while application is open: {this.state.currentStepCount}</Text>
            </View>
        );
    }
}

Expo.registerRootComponent(ProfileScreen);
