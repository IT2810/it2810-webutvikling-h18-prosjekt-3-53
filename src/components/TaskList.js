import React from "react";
import { View } from 'react-native';
import Task from "components/Task";

function TaskList({tasks}) {
  return (
    <View>
      {
        tasks.map(
          task => <Task key={task.id} title={task.title} description={task.description} status={task.status} />
        )
      }
     </View>
  );
}

export default TaskList;
