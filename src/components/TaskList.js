import React from "react";
import { View, FlatList, StyleSheet, Text } from 'react-native';
import Task from "components/Task";
import { dimensions, fonts, padding } from 'constants/Base';

function TaskList({tasks}) {
  return (
    <View style={styles.container}>
        <FlatList
          data={tasks}
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
