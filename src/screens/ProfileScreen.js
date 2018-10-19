import Expo from 'expo';
import React from 'react';
import {Pedometer} from 'expo';
import {View, Text, Image, StyleSheet} from 'react-native';
import {styles} from 'constants/Base';
import {colors} from 'constants/Colors';

export default class ProfileScreen extends React.Component {
    state = {
        isPedometerAvailable: 'checking',
        pastStepCount: 0,
        currentStepCount: 0
    };

    componentDidMount() {
        this._subscribe();
    };

    componentWillUnmount() {
        this.unsubscrive();
    };

    _subscribe = () => {
        this._subscription = Pedometer.watchStepCount(result => {
            this.setState({
                currentStepCount: result.steps
            });
        });

        Pedometer.isAvailableAsync().then(
            result => {
                this.setState({
                    isPedometerAvailable: String(result)
                });
            },
            error => {
                this.setState({
                    isPedometerAvailable: 'Could not get isPedometerAvailable: ' + error
                });
            }
        );

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
    }


    render() {
        return (
            <View style={styles.container}>
                //<Image style={styles.avatar} source={{uri: '/assets/profile-icon.png'}}/>
                <View style={styles.body}>
                    <View style={styles.bodyContent}>
                        <Text style={styles.name}>John Doe</Text>
                        <Text style={styles.description}>Tasks completed: x</Text>
                        <Text style={styles.description}>Tasks closed: y</Text>

                    </View>
                </View>
                <Text>Steps taken in the last 24 hours: {this.state.pastStepCount}</Text>
                <Text>Step count while application is open: {this.state.currentStepCount}</Text>
            </View>
        );
    }
}

Expo.registerRootComponent(ProfileScreen);
