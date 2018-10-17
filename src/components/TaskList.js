import React from "react";
import { View, FlatList, StyleSheet, Text, TouchableHighlight } from 'react-native';
import Task from "components/Task";
import { dimensions, fonts, padding } from 'constants/Base';

function TaskList({tasks, filter, selectTask}) {
  const filtered_list = [];
  tasks.forEach(function (task) {
    if(task.status && task.status.toLowerCase() == filter.split("_")[1].toLowerCase()) filtered_list.push(task);
  });
  return (
    <View style={styles.container}>
        <FlatList
          data={tasks}
          renderItem={({item}) => {
            return (
              <TouchableHighlight onPress={() => selectTask(item.id)}>
                <Text style={styles.item}>{item.title}</Text>
              </TouchableHighlight>
            );
          }}
          keyExtractor={item => item.id.toString()}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: padding.sm,
    fontSize: fonts.lg,
    height: 50,
    width: dimensions.fullWidth
  },
});

export default TaskList;
