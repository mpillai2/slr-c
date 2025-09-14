import { StyleSheet, Text, View } from "react-native";

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.myText}>test</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#39211eff",
  },
    myText: {
    fontSize: 24,          
    color: "white",        
    fontWeight: "bold",      
    textAlign: "center",  
    fontFamily: "Anton",  
  },
});
