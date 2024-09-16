import React, { useState, useEffect } from "react";
import { View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

export const CollapsibleContainer = ({ children, expanded }) => {
  const [measuredHeight, setMeasuredHeight] = useState(0);
  const animatedHeight = useSharedValue(0);

  const onLayout = (event) => {
    const layoutHeight = event.nativeEvent.layout.height;
    console.log("onLayout height captured:", layoutHeight);

    // Set the height only once after it is captured
    if (layoutHeight > 0 && measuredHeight === 0) {
      setMeasuredHeight(layoutHeight);
    }
  };

  // Apply animation once the measuredHeight is available
  useEffect(() => {
    if (measuredHeight > 0) {
      animatedHeight.value = expanded
        ? withTiming(measuredHeight)
        : withTiming(0);
      console.log("Animating to:", expanded ? measuredHeight : 0);
    }
  }, [expanded, measuredHeight]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: animatedHeight.value,
      overflow: "hidden",
    };
  });

  return (
    <Animated.View style={animatedStyle}>
      <View onLayout={onLayout}>{children}</View>
    </Animated.View>
  );
};
