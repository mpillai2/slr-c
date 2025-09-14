import { Link } from "expo-router";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <ImageBackground
      source={require("../assets/images/something.jpg")}
      style={styles.background}
      resizeMode="cover"
    >
    <View style={styles.container}>
      <Text style={styles.myText}>FIRST</Text>
      <Text style={styles.myText}>DROP</Text>
      <Text style={styles.myText}>SOON</Text>

      <Link href="/about" style={styles.button}>
        <Text style={styles.buttonText}>NOTIFY ME</Text>
      </Link>

    </View>
    </ImageBackground>
  );
}
  // myText: {
  //   fontSize: 40,
  //   fontWeight: "bold",
  //   color: "#fff",
  //   textAlign: "center",
  //   letterSpacing: 2,
  // },
  // glowLayer: {
  //   position: "absolute",
  //   left: 0,
  //   right: 0,
  //   textShadowColor: "rgba(255, 255, 255, 0.8)",
  //   textShadowOffset: { width: 0, height: 0 },
  //   textShadowRadius: 20,
  // },
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
    myText: {
    fontSize: 55,          
    color: "black",        
    fontWeight: "bold",      
    textAlign: "center",
    textShadowColor: "white",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 6,  
  },
  button: {
    marginTop: 20,
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 22,
    borderColor: "black",
    borderWidth: 5,
    padding: 5,
    textAlign: "center",
  },
  buttonText: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    textShadowColor: "white",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 15,
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
});
