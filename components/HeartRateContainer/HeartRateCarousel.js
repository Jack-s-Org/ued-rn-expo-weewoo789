import * as React from "react";
import Carousel from "react-native-reanimated-carousel";

// import Slide from "./Slide";
import { useWindowDimensions, Dimensions, View } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import HeartRateDots from "./HeartRateDots";
import HeartRate from "./HeartRate";
import HeartRate2 from "./HeartRate2";

const window = Dimensions.get("window");
const PAGE_WIDTH = window.width;
const height = PAGE_WIDTH / 2;

const data = [
  //   <Slide backgroundColor="red" />,
  //   <Slide backgroundColor="orange" />,
  //   <Slide backgroundColor="yellow" />,
  //   <Slide backgroundColor="green" />,
  //   <Slide backgroundColor="blue" />,
  <HeartRate index={0}></HeartRate>,
  <HeartRate2 index={1}></HeartRate2>,
];

function HeartRateCarousel() {
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

      <View
        style={{
          marginTop: 16,
          position: "absolute",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          flex: 1,
          left: 0,
          right: 0,
          bottom: 0,
          top: 110,
        }}
      >
        <HeartRateDots data={data} currentIndex={index} />
      </View>
    </View>
  );
}

export default HeartRateCarousel;
