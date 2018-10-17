import React from "react";
import { View, FlatList, StyleSheet, Text } from 'react-native';
import Task from "components/Task";
import { dimensions, fonts, padding } from 'constants/Base';
import Filter from actions;

function TaskList({tasks, filter}) {
  const filtered_list = [];
  tasks.forEach(function (task) {
    if(task.status.toLowerCase() == filter.split("_")[1].toLowerCase()) filtered_list.push(task);
  });
  return (
    <View style={styles.container}>
        <FlatList
          data={filtered_list}
          renderItem={({item}) => <Text style={styles.item}>{item.title}</Text>}
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
