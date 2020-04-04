import React, { useState } from 'react';
import { StyleSheet,
         Text,
         View,
         TextInput,
         Button,
         ScrollView,
         FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...courseGoals,
      { key: Math.random().toString(), value: goalTitle }
      ]);
  };

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList
        // keyExtractor={(item, index) => item.uid}
        data={courseGoals}
        renderItem={itemData =>
          <GoalItem
            onDelete={() => console.log('Hit')}
            title={itemData.item.value} />}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }

});
