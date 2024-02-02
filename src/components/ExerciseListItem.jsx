import { StyleSheet, Text, View, Pressable } from "react-native";
import { Link } from "expo-router";

  
  
const ExerciseListItem = ({item}) =>{
    return(
    <Link href={`${item.name}`} asChild>
      <Pressable style={styles.exerciseContainer}>
         <Text style={styles.exerciseName}>
        {item.name}
      </Text>
      <Text>
         <Text style={styles.subTitle}>{item.muscle}</Text> | <Text>{item.equipment}</Text>
      </Text>
      </Pressable>
    </Link>
    )
  }
export default ExerciseListItem


  const styles = StyleSheet.create({
exerciseContainer:{
    backgroundColor:"#fff",
    padding:18,
    borderRadius:10,

        //Shadow
    shadowColor: "#000000",
shadowOffset: {
  width: 0,
  height: 3,
},
shadowOpacity:  0.18,
shadowRadius: 4.59,
elevation: 5
  },
  exerciseName:{
    fontSize: 18, 
    fontWeight: "bold", 
    color: "rgba(0,0,0,0.99)",
  }, 
  subTitle:{
    textTransform:"capitalize",
    fontSize:12, 
    color:"dimgrey", 
    fontWeight:"normal",
  },
});
