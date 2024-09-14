import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useScrollViewOffset,
  useSharedValue,
} from "react-native-reanimated";
import { items } from "./OverviewImg";
import CarouselItem from "./CarouselItem";
import { useRef } from "react";

{
  /* <CarouselItem
              item={item}
              index={index}
              scrollX={scrollX}
              width={width}
            /> */
}

export default function App() {
  const scrollX = useSharedValue(0);
  const { width } = Dimensions.get("window");
  const onScrollHandler = useAnimatedScrollHandler((event) => {
    scrollX.value = event.contentOffset.x;
    // console.log("Items:", items);
    // console.log("ScrollX:", scrollX.value);
  });
  return (
    <View style={styles.container}>
      {/* <StatusBar style="auto" /> */}
      <Animated.FlatList
        horizontal
        onScroll={onScrollHandler}
        scrollEventThrottle={16}
        data={items}
        keyExtractor={(item) => item.id}
        pagingEnabled={true}
        renderItem={({ item, index }) => {
          return (
            <View
              style={{
                height: 200,
                width: 200,
                backgroundColor: "blue",
                margin: 16,
              }}
            />
          );
        }}
        style={{ width: "100%", height: "100%" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#fff",
    marginTop: 80,
  },
});
