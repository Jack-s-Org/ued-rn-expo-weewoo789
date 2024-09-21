import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import SavedRoutesButton from "./SavedRoutesButton";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";

export default function Accordion({
  title,
  details = "",
  imageBackground,
  button,
  defaultImage,
  expandedImage,
  onToggle,
  learnmoreBackground,
}) {
  // Set default value for details
  const [opened, setOpened] = useState(false);
  const animation = useSharedValue(0); // useSharedValue instead of useState with Animated.Value

  const numberOfWords = details ? details.split(" ").length : 0; // Safeguard against undefined

  function toggleAccordion() {
    if (!opened) {
      animation.value = withTiming(1, { duration: 100 });
      onToggle && onToggle((numberOfWords / 2.6) * 12);
    } else {
      animation.value = withTiming(0, { duration: 100 });
      onToggle && onToggle(-((numberOfWords / 2.6) * 12));
    }
    setOpened(!opened);
  }

  // useAnimatedStyle to create animated height style
  const animatedContainerStyle = useAnimatedStyle(() => {
    const height = animation.value * 100 + 73; // Adjust base height and expanded height as needed
    return {
      height: height,
    };
  });

  // useAnimatedStyle for content height
  const animatedContentStyle = useAnimatedStyle(() => {
    const contentHeight = animation.value * (numberOfWords / 2.6) * 14;
    return {
      height: contentHeight,
    };
  });

  const navigation = useNavigation();

  return (
    <Animated.View style={[styles.container, animatedContainerStyle]}>
      <ImageBackground
        source={opened ? expandedImage : defaultImage}
        style={styles.image}
        resizeMode="stretch"
      >
        <TouchableWithoutFeedback onPress={toggleAccordion}>
          <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
            {button}
          </View>
        </TouchableWithoutFeedback>

        <Animated.View style={[styles.content, animatedContentStyle]}>
          <View style={{ paddingTop: 10 }}>
            <Text style={styles.details}>{details}</Text>
            <Pressable
              onPress={() => {
                navigation.navigate("Library", {
                  screen: "RouteLibrary",
                });
                // Fallback to navigate if goBack is not possible
              }}
            >
              <View style={{ paddingTop: 10 }}>
                <ImageBackground
                  source={learnmoreBackground}
                  style={{
                    width: 70,
                    height: 28,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={styles.learnmore}>Learn More</Text>
                </ImageBackground>
              </View>
            </Pressable>
          </View>
        </Animated.View>
      </ImageBackground>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 62,
    justifyContent: "center",
    // alignItems: "center",
    overflow: "hidden",
  },

  image: {
    flex: 1,
    // justifyContent: "center",
    margin: 4,
  },

  header: {
    flexDirection: "row",
    paddingHorizontal: 20,
    justifyContent: "space-between",
    top: 20,
  },
  content: {
    marginTop: 24,
    paddingHorizontal: 20,
  },
  title: {
    fontFamily: "TransformaSansSemiBold",
    fontSize: 18,
    backgroundColor: "transparent",
    color: "white",
  },
  details: {
    fontFamily: "TransformaSansMedium",
    fontSize: 14,
    backgroundColor: "transparent",
    color: "white",
  },
  learnmore: {
    fontFamily: "TransformaSansMedium",
    fontSize: 8,
    color: "white",
    backgroundColor: "transparent",
  },
});
