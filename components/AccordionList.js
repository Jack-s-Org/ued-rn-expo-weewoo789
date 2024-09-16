import React, { useState } from "react";
import {
  ScrollView,
  View,
  Animated,
  ImageBackground,
  StyleSheet,
  Text,
} from "react-native";
import Accordion from "./Accordion"; // Assuming Accordion is in another file
import SavedRoutesButton from "./SavedRoutesButton";
import DiscoverRoutesButton from "./DiscoverRoutesButton";
import CustomizeRouteButton from "./CustomizeRouteButton";

export default function AccordionList() {
  const [containerHeight, setContainerHeight] = useState(290); // Set an initial height

  // Function to update container height dynamically
  const updateContainerHeight = (accordionHeight) => {
    setContainerHeight((prevHeight) =>
      Math.max(62, prevHeight + accordionHeight)
    );
  };

  return (
    <Animated.View style={{ height: containerHeight }}>
      <ImageBackground
        source={require("@/assets/images/selectioncontainer.png")} // The image for the container background
        style={[styles.imageBackground, { height: containerHeight }]} // Dynamically update the height
        resizeMode="cover" // To ensure the image resizes correctly
      >
        <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
          <View>
            <Text
              style={{
                fontFamily: "TransformaMixSemiBold",
                fontSize: 20,
                backgroundColor: "transparent",
                color: "white",
              }}
            >
              Where will you run today?
            </Text>
          </View>
        </View>

        <Accordion
          title="Saved routes"
          details="Running on familiar routes can never go wrong. Explore your selection of saved routes."
          defaultImage={require("@/assets/images/savedroutescontainer.png")} // Image for accordion 1
          expandedImage={require("@/assets/images/savedroutesexpanded.png")}
          button={<SavedRoutesButton />}
          onToggle={(heightChange) => updateContainerHeight(heightChange)}
        />
        <Accordion
          title="Discover routes"
          details="Explore new routes curated by the community. Trying something new doesn’t hurt!"
          defaultImage={require("@/assets/images/discoverroutescontainer.png")} // Image for accordion 2
          expandedImage={require("@/assets/images/discoverroutesexpanded.png")}
          button={<DiscoverRoutesButton />}
          onToggle={(heightChange) => updateContainerHeight(heightChange)}
        />
        <Accordion
          title="Customize route"
          details="Spice things up by creating your own route and adding new data to our database!"
          defaultImage={require("@/assets/images/customizeroutecontainer.png")} // Image for accordion 3
          expandedImage={require("@/assets/images/customizerouteexpanded.png")}
          button={<CustomizeRouteButton />}
          onToggle={(heightChange) => updateContainerHeight(heightChange)}
        />
      </ImageBackground>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    // justifyContent: "center",
    //   padding: 10,
    borderRadius: 20,
    overflow: "hidden", // Make sure content fits within the container
    width: 350,
    // height: 268,
    alignSelf: "center",
    marginTop: 14,
    alignItems: "center",
  },
});
