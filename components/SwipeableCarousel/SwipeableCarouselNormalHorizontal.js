import * as React from "react";
import Carousel from "react-native-reanimated-carousel";

import Slide from "./Slide";
import { useWindowDimensions, Dimensions, View } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Dots from "./Dots";

const window = Dimensions.get("window");
const PAGE_WIDTH = window.width;
const height = PAGE_WIDTH / 2;

const data = [
  <Slide backgroundColor="red" />,
  <Slide backgroundColor="orange" />,
  <Slide backgroundColor="yellow" />,
  <Slide backgroundColor="green" />,
  <Slide backgroundColor="blue" />,
];

function SwipeableCarouselNormalHorizontal() {
  const windowWidth = useWindowDimensions().width;
  const scrollOffsetValue = useSharedValue(0);

  const [index, setIndex] = React.useState(0);

  const isVertical = false;

  const baseOptions = isVertical
    ? {
        vertical: true,
        width: windowWidth,
        height,
      }
    : {
        vertical: false,
        width: windowWidth,
        height,
      };

  return (
    <View>
      <View style={{ height }}>
        <Carousel
          {...baseOptions}
          style={{
            width: "100%",
          }}
          loop={false}
          defaultScrollOffsetValue={scrollOffsetValue}
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

export default SwipeableCarouselNormalHorizontal;
