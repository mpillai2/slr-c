import { Link } from "expo-router";
import React, { useRef, useState } from "react";
import { Dimensions, Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const { width: screenWidth } = Dimensions.get("window");

type Slide = {
  title: string;
  image: any;
};

const slides: Slide[] = [
  { title: " ", image: require("../assets/images/nobg1.png") },
  { title: " ", image: require("../assets/images/nobg2.png") },
];

export default function About() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<ScrollView>(null);

  const handleScroll = (event: any) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / screenWidth);
    setActiveIndex(index);
  };

  return (
    <ImageBackground
      source={require("../assets/images/noisetexture2.jpg")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay} />
      <View style={styles.container}>
        <Text style={styles.titleText}>SLR-C1</Text>
        <ScrollView
          ref={scrollRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          scrollEventThrottle={16}
        >
          {slides.map((slide, index) => (
            <View key={index} style={styles.slide}>
              <Link href="/checkout" asChild>
                <TouchableOpacity style={{ width: 300, height: 250 }} activeOpacity={0.9}>
                  <Image
                    source={slide.image}
                    style={styles.image}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </Link>
              <Text style={styles.title}>{slide.title}</Text>
            </View>
          ))}
        </ScrollView>
        <View style={styles.dots}>
          {slides.map((_, i) => (
            <View
              key={i}
              style={[
                styles.dot,
                i === activeIndex ? styles.activeDot : undefined,
              ]}
            />
          ))}
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "black",
    marginBottom: 0,
    marginTop: 50,
    textShadowColor: "white",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 6,
  },
  slide: {
    width: screenWidth,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  image: {
    width: 300,
    height: 250,
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: "#000000ff",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 20,
    elevation: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
  },
  dots: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: -40,
    marginBottom: 50,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#aaaaaa",
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: "#000",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(79, 70, 70, 0.4)",
  },
});
