import { StyleSheet, View, FlatList } from "react-native";
import exercises from "../assets/data/exercises.json";
import ExerciseListItem from "../src/components/ExerciseListItem";
import { useQuery } from "@tanstack/react-query";


export default function ExercisesScreen() {
  const {data} = useQuery({

  })

  return (
    <View style={styles.container}>
    <FlatList 
    contentContainerStyle={{gap:5}}
    data={exercises}
    keyExtractor={(item, index)=> item.name + index}
    renderItem={({item})=>(<ExerciseListItem item={item}/>)
    }
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "ghostwhite",
    justifyContent: "center",

  },
});
