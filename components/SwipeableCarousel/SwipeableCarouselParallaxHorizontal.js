import * as React from "react";
import Carousel from "react-native-reanimated-carousel";

import Slide from "./Slide";
import {
  useWindowDimensions,
  Dimensions,
  View,
  Image,
  ImageBackground,
} from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Dots from "./Dots";

const window = Dimensions.get("window");
const PAGE_WIDTH = window.width;
const height = PAGE_WIDTH / 2;

const data = [
  <ImageBackground
    source={require("@/assets/images/overview1.png")}
    style={{ width: 242, height: 227, alignSelf: "center" }}
  >
    <Slide></Slide>
  </ImageBackground>,

  <ImageBackground
    source={require("@/assets/images/overview2.png")}
    style={{ width: 242, height: 227, alignSelf: "center" }}
  >
    <Slide></Slide>
  </ImageBackground>,

  <ImageBackground
    source={require("@/assets/images/overview3.png")}
    style={{ width: 242, height: 227, alignSelf: "center" }}
  >
    <Slide></Slide>
  </ImageBackground>,

  <ImageBackground
    source={require("@/assets/images/overview4.png")}
    style={{ width: 242, height: 227, alignSelf: "center" }}
  >
    <Slide></Slide>
  </ImageBackground>,
];

function SwipeableCarouselParallaxHorizontal() {
  const windowWidth = useWindowDimensions().width;
  const scrollOffsetValue = useSharedValue(0);

  const [index, setIndex] = React.useState(0);

  const isVertical = true;

  const baseOptions = isVertical
    ? {
        vertical: false,
        width: windowWidth,
        height: windowWidth * 0.6,
      }
    : {
        vertical: false,
        width: windowWidth,
        height: windowWidth * 0.6,
      };

  return (
    <View>
      <View
        style={{
          height: windowWidth * 0.6,
        }}
      >
        <Carousel
          {...baseOptions}
          style={{
            width: windowWidth,
          }}
          loop={false}
          defaultScrollOffsetValue={scrollOffsetValue}
          mode="parallax"
          modeConfig={{
            parallaxScrollingScale: 0.9,
            parallaxScrollingOffset: 150,
          }}
          // autoPlay={true}
          // autoPlayInterval={2000}
          data={data}
          onSnapToItem={(index) => setIndex(index)}
          renderItem={({ index }) => data[index]}
        />
      </View>

      <View style={{ marginTop: 16 }}>
        <Dots data={data} currentIndex={index} />
      </View>
    </View>
  );
}

export default SwipeableCarouselParallaxHorizontal;
