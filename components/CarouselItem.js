import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Animated, {
  useAnimatedStyle,
  interpolate,
} from "react-native-reanimated";
import { items } from "./OverviewImg";

const { width } = Dimensions.get("window");

const CarouselItem = ({ item, index, scrollX }) => {
  const rnStyle = useAnimatedStyle(() => {
    const translateX = interpolate(
      scrollX.value,
      [(index - 1) * width, index * width, (index + 1) * width],
      [-width * 0.15, 0, width * 0.15],
      "clamp"
    );

    const scale = interpolate(
      scrollX.value,
      [(index - 1) * width, index * width, (index + 1) * width],
      [0.9, 1, 0.9],
      "clamp"
    );

    return {
      transform: [
        {
          translateX,
        },
        {
          scale,
        },
      ],
    };
  });

  return (
    <Animated.View
      style={[
        {
          width,
          height: 250,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "blue",
        },
        rnStyle,
      ]}
      key={item.id}
    >
      <Image
        source={item.img}
        style={{
          width: 230,
          height: 216,
        }}
        resizeMode="cover"
      />
      <Text>{item.title}</Text>
    </Animated.View>
  );
};

export default CarouselItem;

const styles = StyleSheet.create({});
