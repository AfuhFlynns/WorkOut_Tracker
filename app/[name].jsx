import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useLocalSearchParams, Stack } from "expo-router";
import exercises from "../assets/data/exercises.json";
import { useState } from "react";

export default function ExerciseDetailsScreen() {
  const params = useLocalSearchParams();

  const [isInstructionExpanded, setIsInstructionExpanded] = useState(false);

  const exercise = exercises.find((item) => item.name === params.name);

  if (!exercise) {
    return <Text>Exercise not found!</Text>;
  }
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Stack.Screen options={{ title: exercise.name }} />
      <View style={styles.panel}>
        <Text style={styles.exerciseName}>{exercise.name}</Text>
        <Text>
          <Text style={styles.subTitle}>{exercise.muscle}</Text> |{" "}
          <Text>{exercise.equipment}</Text>
        </Text>
      </View>
      <View style={styles.panel}>
        <Text
          style={styles.instructions}
          numberOfLines={isInstructionExpanded ? 0 : 3}
        >
          {exercise.instructions}
        </Text>
        <Text
          style={styles.seeMore}
          onPress={() => setIsInstructionExpanded(!isInstructionExpanded)}
        >
          {isInstructionExpanded? 'See Less': 'See More'}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "white",
    gap: 10,
  },
  panel: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
  },
  exerciseName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "rgba(0,0,0,0.99)",
  },
  subTitle: {
    textTransform: "capitalize",
    fontSize: 12,
    color: "dimgrey",
    fontWeight: "normal",
  },
  instructions: {
    fontSize: 16,
    lineHeight: 22,
  },
  seeMore: {
    padding: 10,
    fontWeight: "500",
    color: "rgba(0,0,255,0.7)",
    alignSelf: "center",
  },
});
