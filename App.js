import React, { useState } from 'react';
import { StyleSheet,
         Text,
         View,
         Button,
         FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...courseGoals,
      { id: Math.random().toString(), value: goalTitle }
      ]);
      setIsAddMode(false);
  };

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
        console.log("goalId", goalId);
      return currentGoals.filter(
        (goal) => goal.id !== goalId
      );
    });
  }

  const cancelGoalHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal"
        onPress={() => setIsAddMode(true)}/>
      <GoalInput
        onAddGoal={addGoalHandler}
        visible={isAddMode}
        onCancel={cancelGoalHandler}/>
      <FlatList
        data={courseGoals}
        renderItem={itemData =>
          <GoalItem
            id={itemData.item.id}
            onDelete={removeGoalHandler}
            title={itemData.item.value} />}/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }

});
