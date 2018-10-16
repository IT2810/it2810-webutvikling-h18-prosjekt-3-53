import React from "react";
import { View, Text } from 'react-native';

function Task(props) {
  return (
    <View className="task">
      <Text>{props.title}</Text>
      <Text>{props.description}</Text>
      <Text>{props.status}</Text>
    </View>
  );
}

export default Task;
