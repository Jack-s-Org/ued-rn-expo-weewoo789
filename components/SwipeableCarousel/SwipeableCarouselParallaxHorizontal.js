import * as React from "react";
import Carousel from "react-native-reanimated-carousel";
import Slide from "./Slide";
import {
  useWindowDimensions,
  Dimensions,
  View,
  ImageBackground,
  Text,
  StyleSheet,
  TouchableOpacity, // Import TouchableOpacity
  Alert, // Import Alert for the button press
  Pressable,
} from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Dots from "./Dots";
import LocationIcon from "../LocationIcon";
import RatingsIcon from "../RatingsIcon";
import { useNavigation } from "@react-navigation/native";

const window = Dimensions.get("window");
const PAGE_WIDTH = window.width;

const data = [
  require("@/assets/images/overview1.png"),
  require("@/assets/images/overview2.png"),
  require("@/assets/images/overview3.png"),
  require("@/assets/images/overview4.png"),
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

  const locationtitle = [
    "Bukit Gasing Loop",
    "Bukit Kiara Peak",
    "Sri Bintang Hill",
    "Desa Park City",
  ];

  const locationdetail = [
    "Bukit Gasing",
    "Bukit Kiara Forest Reserve",
    "Bukit Seri Bintang",
    "The Central Park",
  ];

  const routelength = ["4.8 km", "5.6 km", "4.2 km", "3.8 km"];

  const difficultylevel = ["Moderate", "Moderate", "Moderate", "Easy"];

  const elevation = ["202 m", "198 m", "156 m", "120 m"];

  const weather = ["28°C", "28°C", "26°C", "28°C"];

  const ratings = ["4.7", "4.6", "4.6", "4.5"];

  const getOpacity = (itemIndex) => {
    return itemIndex === index ? 1 : 0.6; // Fully opaque for the center, semi-transparent for others
  };

  // Function to handle press for the clickable slide
  const handlePress = () => {
    Alert.alert("Button Pressed", "You clicked on the second slide!");
  };

  const navigation = useNavigation();

  return (
    <View>
      <View style={{ height: windowWidth * 0.6 }}>
        <Carousel
          {...baseOptions}
          style={{ width: windowWidth }}
          loop={false}
          defaultScrollOffsetValue={scrollOffsetValue}
          mode="parallax"
          defaultIndex={1}
          modeConfig={{
            parallaxScrollingScale: 0.9,
            parallaxScrollingOffset: 150,
          }}
          data={data}
          onSnapToItem={(newIndex) => setIndex(newIndex)}
          renderItem={({ index: itemIndex }) => {
            const isClickable = itemIndex === 1; // Make only the second slide clickable

            return isClickable ? (
              <Pressable
                onPress={() => {
                  navigation.navigate("Library", {
                    screen: "RouteAnalysis",
                  });
                }}
              >
                <ImageBackground
                  source={data[itemIndex]}
                  style={{
                    width: 242,
                    height: 227,
                    alignSelf: "center",
                    opacity: getOpacity(itemIndex), // Apply the calculated opacity
                  }}
                >
                  <Slide />
                </ImageBackground>
              </Pressable>
            ) : (
              <ImageBackground
                source={data[itemIndex]}
                style={{
                  width: 242,
                  height: 227,
                  alignSelf: "center",
                  opacity: getOpacity(itemIndex),
                }}
              >
                <Slide />
              </ImageBackground>
            );
          }}
        />
      </View>

      <View>
        <Text
          style={{
            textAlign: "center",
            marginTop: 6,
            color: "white",
            fontFamily: "TransformaSansSemiBold",
            fontSize: 24,
          }}
        >
          {locationtitle[index]}
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          paddingTop: 6,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <LocationIcon />
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontFamily: "TransformaSansMedium",
            fontSize: 14,
          }}
        >
          {locationdetail[index]}
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          columnGap: 10,
          paddingTop: 16,
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <View style={{ flexDirection: "column", rowGap: 18 }}>
          <View>
            <ImageBackground
              source={require("@/assets/images/overviewbox1.png")}
              style={{ width: 170, height: 68 }}
            >
              <Text style={styles.infotitle}>Route length</Text>
              <Text style={styles.infodetail}>{routelength[index]}</Text>
            </ImageBackground>
          </View>

          <View>
            <ImageBackground
              source={require("@/assets/images/overviewbox3.png")}
              style={{ width: 170, height: 68 }}
            >
              <Text style={styles.infotitle}>Route type</Text>
              <Text style={styles.infodetail}>Loop</Text>
            </ImageBackground>
          </View>

          <View>
            <ImageBackground
              source={require("@/assets/images/overviewbox1.png")}
              style={{ width: 170, height: 68 }}
            >
              <Text style={styles.infotitle}>Weather</Text>
              <Text style={styles.infodetail}>{weather[index]}</Text>
            </ImageBackground>
          </View>
        </View>

        <View style={{ flexDirection: "column", rowGap: 18 }}>
          <View>
            <ImageBackground
              source={require("@/assets/images/overviewbox2.png")}
              style={{ width: 170, height: 68 }}
            >
              <Text style={styles.infotitle}>Difficulty level</Text>
              <Text style={styles.infodetail}>{difficultylevel[index]}</Text>
            </ImageBackground>
          </View>

          <View>
            <ImageBackground
              source={require("@/assets/images/overviewbox4.png")}
              style={{ width: 170, height: 68 }}
            >
              <Text style={styles.infotitle}>Elevation gain</Text>
              <Text style={styles.infodetail}>{elevation[index]}</Text>
            </ImageBackground>
          </View>

          <View>
            <ImageBackground
              source={require("@/assets/images/overviewbox2.png")}
              style={{ width: 170, height: 68 }}
            >
              <Text style={styles.infotitle}>Ratings</Text>
              <View
                style={{
                  flexDirection: "row",
                  columnGap: 12,
                  alignContent: "center",
                }}
              >
                <View>
                  <Text style={styles.infodetail}>{ratings[index]}</Text>
                </View>
                <View style={{ top: 16 }}>
                  <RatingsIcon />
                </View>
              </View>
            </ImageBackground>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  infotitle: {
    fontFamily: "TransformaSansSemiBold",
    fontSize: 10,
    backgroundColor: "transparent",
    color: "white",
    left: 10,
    top: 10,
  },

  infodetail: {
    fontFamily: "TransformaSansBold",
    fontSize: 18,
    backgroundColor: "transparent",
    color: "white",
    // paddingTop: 6,
    left: 10,
    top: 16,
  },
});

export default SwipeableCarouselParallaxHorizontal;
