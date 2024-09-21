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
  // const [containerHeight, setContainerHeight] = useState(290); // Set an initial height

  // Function to update container height dynamically
  // const updateContainerHeight = (accordionHeight) => {
  //   setContainerHeight((prevHeight) =>
  //     Math.max(62, prevHeight + accordionHeight)
  //   );
  // };

  return (
    <ScrollView style={{ paddingBottom: 20 }}>
      <View style={{ flex: 1, flexGrow: 1 }}>
        <Animated.View style={{ flex: 1 }}>
          <ImageBackground
            source={require("@/assets/images/selectioncontainer.png")} // The image for the container background
            style={[styles.imageBackground]} // Dynamically update the height
            resizeMode="cover" // To ensure the image resizes correctly
          >
            <View
              style={{
                paddingHorizontal: 20,
                paddingTop: 10,
                paddingBottom: 12,
              }}
            >
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
              // onToggle={(heightChange) => updateContainerHeight(heightChange)}
              learnmoreBackground={require("@/assets/images/savedroutesbutton.png")}
              targetScreen="Library"
            />
            <Accordion
              title="Discover routes"
              details="Explore new routes curated by the community. Trying something new doesn’t hurt!"
              defaultImage={require("@/assets/images/discoverroutescontainer.png")} // Image for accordion 2
              expandedImage={require("@/assets/images/discoverroutesexpanded.png")}
              button={<DiscoverRoutesButton />}
              // onToggle={(heightChange) => updateContainerHeight(heightChange)}
              learnmoreBackground={require("@/assets/images/discoverroutesbutton.png")}
              targetScreen="Discover"
            />
            <Accordion
              title="Customize route"
              details="Spice things up by creating your own route and adding new data to our database!"
              defaultImage={require("@/assets/images/customizeroutecontainer.png")} // Image for accordion 3
              expandedImage={require("@/assets/images/customizerouteexpanded.png")}
              button={<CustomizeRouteButton />}
              // onToggle={(heightChange) => updateContainerHeight(heightChange)}
              learnmoreBackground={require("@/assets/images/customizeroutebutton.png")}
            />
          </ImageBackground>
        </Animated.View>

        <View style={[styles.routesContainer]}>
          <ImageBackground
            source={require("@/assets/images/routescontainer.png")}
            style={{ width: 350, height: 752 }}
            //   resizeMode="cover"
          >
            <View
              style={{
                paddingHorizontal: 20,
                paddingTop: 10,
                paddingBottom: 12,
              }}
            >
              <Text
                style={{
                  fontFamily: "TransformaMixSemiBold",
                  fontSize: 20,
                  backgroundColor: "transparent",
                  color: "white",
                }}
              >
                Previous Routes
              </Text>
            </View>

            <View style={{ flexDirection: "column", rowGap: 10 }}>
              <View style={styles.card}>
                <ImageBackground
                  source={require("@/assets/images/getstartedroute1.png")}
                  style={{ width: 309, height: 165 }}
                >
                  <View style={styles.cardtext}>
                    <View>
                      <Text style={styles.locationtitle}>Bukit Kiara Peak</Text>
                    </View>
                    <View>
                      <Text style={styles.locationdetail}>
                        Bukit Kiara Forest Reserve . 5.6 km
                      </Text>
                    </View>
                  </View>
                </ImageBackground>
              </View>

              <View style={styles.card}>
                <ImageBackground
                  source={require("@/assets/images/getstartedroute2.png")}
                  style={{ width: 309, height: 165 }}
                >
                  <View style={styles.cardtext}>
                    <View>
                      <Text style={styles.locationtitle}>Sri Bintang Hill</Text>
                    </View>
                    <View>
                      <Text style={styles.locationdetail}>
                        Bukit Seri Bintang . 2.3 km
                      </Text>
                    </View>
                  </View>
                </ImageBackground>
              </View>

              <View style={styles.card}>
                <ImageBackground
                  source={require("@/assets/images/getstartedroute3.png")}
                  style={{ width: 309, height: 165 }}
                >
                  <View style={styles.cardtext}>
                    <View>
                      <Text style={styles.locationtitle}>Desa Park City</Text>
                    </View>
                    <View>
                      <Text style={styles.locationdetail}>
                        The Central Park . 3.4 km
                      </Text>
                    </View>
                  </View>
                </ImageBackground>
              </View>

              <View style={styles.card}>
                <ImageBackground
                  source={require("@/assets/images/getstartedroute4.png")}
                  style={{ width: 309, height: 165 }}
                >
                  <View style={styles.cardtext}>
                    <View>
                      <Text style={styles.locationtitle}>
                        Bukit Gasing Loop
                      </Text>
                    </View>
                    <View>
                      <Text style={styles.locationdetail}>
                        Bukit Gasing . 3.9 km
                      </Text>
                    </View>
                  </View>
                </ImageBackground>
              </View>
            </View>
          </ImageBackground>
        </View>
      </View>
    </ScrollView>
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

  routesContainer: {
    paddingVertical: 20,
    flex: 1,
    flexGrow: 1,
  },

  locationtitle: {
    fontFamily: "TransformaMixSemiBold",
    fontSize: 22,
    backgroundColor: "transparent",
    color: "white",
  },

  card: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },

  locationdetail: {
    fontFamily: "TransformaSansMedium",
    fontSize: 12,
    backgroundColor: "transparent",
    color: "white",
  },

  cardtext: {
    flexDirection: "column",
    rowGap: 0,
    paddingHorizontal: 30,
    position: "absolute",
    bottom: 0,
    paddingVertical: 20,
  },
});
