import React from 'react';
import { View, Text } from 'react-native';

export default class TaskList extends React.Component {
    constructor(props) {
        super(props);
      }
    render() {
        return (
            <View>
                <div>
                    {props.tasks.map((task) => (
                        <Task id={task.id} title={task.title} description={task.description} status={task.status} end date={task.endDate}/>
                    )}
                </div>
            </View>
        )
    }
}
