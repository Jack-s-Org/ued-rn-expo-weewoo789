import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";
import SavedRoutesButton from "./SavedRoutesButton";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

export default function Accordion({
  title,
  details = "",
  imageBackground,
  button,
  defaultImage,
  expandedImage,
  onToggle,
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
    const height = animation.value * 62 + 73; // Adjust base height and expanded height as needed
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
          <Text style={styles.details}>{details}</Text>
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
});
