// import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
// import Carousel from "react-native-snap-carousel";

// type Slide = {
//   title: string;
//   image: any; 
// };

// const data: Slide[] = [
//   { title: "Slide 1", image: require("../assets/images/flick1.avif") },
//   { title: "Slide 2", image: require("../assets/images/flick2.avif") },
// ];

// const { width: screenWidth } = Dimensions.get("window");

// export default function Catch() {
//   const renderItem = ({ item }: { item: Slide; index: number }) => (
//     <View style={styles.slide}>
//       <Image source={item.image} style={styles.image} />
//       <Text style={styles.myText}>{item.title}</Text>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <Carousel
//         data={data}
//         renderItem={renderItem}
//         sliderWidth={screenWidth}
//         itemWidth={screenWidth * 0.8}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "rgba(235, 181, 174, 1)",
//   },
//   slide: {
//     backgroundColor: "#fff",
//     borderRadius: 10,
//     height: 300,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 10,
//   },
//   image: {
//     width: 220,
//     height: 180,
//     borderRadius: 10,
//     marginBottom: 10,
//   },
//   myText: {
//     fontSize: 24,
//     color: "white",
//     fontWeight: "bold",
//     textAlign: "center",
//     fontFamily: "Anton",
//   },
// });
