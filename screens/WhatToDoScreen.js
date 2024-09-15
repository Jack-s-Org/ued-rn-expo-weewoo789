import {
  Text,
  Button,
  StyleSheet,
  ImageBackground,
  Image,
  View,
  Pressable,
  ScrollView,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import BackIcon from "@/components/BackIcon";
import SearchIcon from "@/components/SearchIcon";
import { useNavigation } from "@react-navigation/native";
import NextIcon from "@/components/NextIcon";
import GearIcon1 from "@/components/GearIcon1";
import GearIcon2 from "@/components/GearIcon2";
import GearIcon3 from "@/components/GearIcon3";
import GearIcon4 from "@/components/GearIcon4";

const RouteLibraryScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ height: "100%" }}>
        <ImageBackground
          source={require("@/assets/images/background.png")}
          resizeMode="cover"
          style={{
            flex: 1,
            // justifyContent: "center",
            height: "100%",
          }}
        >
          <ImageBackground
            source={require("@/assets/images/smalltopframe.png")}
            style={{
              top: 0,
              width: 390,
              height: 166,
              justifyContent: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: 20,
                columnGap: 20,
                // justifyContent: "center",
                marginBottom: 6,
                marginTop: 26,
                top: -14,
                // backgroundColor: "red",
                // paddingTop: 0,
              }}
            >
              <View>
                <BackIcon onPress={() => navigation.goBack()}></BackIcon>
              </View>

              <View>
                <Text
                  style={{
                    fontFamily: "TransformaMixSemiBold",
                    fontSize: 28,
                    backgroundColor: "transparent",
                    color: "white",
                    textAlign: "center",
                    width: 250,
                  }}
                >
                  What To Do
                </Text>
              </View>

              <View>
                <NextIcon></NextIcon>
              </View>
            </View>
          </ImageBackground>

          <ScrollView>
            <View style={{ paddingHorizontal: 20, paddingVertical: 20 }}>
              <View>
                <Text style={styles.sectiontitle}>Running Form</Text>
              </View>
              <ScrollView horizontal>
                <View
                  style={{
                    flexDirection: "row",
                    columnGap: 10,
                    paddingTop: 14,
                  }}
                >
                  <View>
                    <ImageBackground
                      source={require("@/assets/images/formcontainer1.png")}
                      style={{ width: 202, height: 207 }}
                    >
                      <View style={{ flexDirection: "row" }}>
                        <View style={{ paddingHorizontal: 20, paddingTop: 52 }}>
                          <View>
                            <Text style={styles.runningform}>
                              Maintain steady breathing
                            </Text>
                          </View>
                          <View style={{ paddingTop: 10 }}>
                            <ImageBackground
                              source={require("@/assets/images/learnmore1.png")}
                              style={{
                                width: 70,
                                height: 28,
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <View>
                                <Text style={styles.learnmore}>Learn More</Text>
                              </View>
                            </ImageBackground>
                          </View>
                        </View>
                        <View style={{ paddingTop: 34 }}>
                          <Image
                            source={require("@/assets/images/formpic1.png")}
                            style={{
                              width: 58,
                              height: 136,
                              zIndex: 10,
                              right: 10,
                            }}
                          />
                        </View>
                      </View>
                    </ImageBackground>
                  </View>

                  <View>
                    <ImageBackground
                      source={require("@/assets/images/formcontainer2.png")}
                      style={{ width: 202, height: 207 }}
                    >
                      <View style={{ flexDirection: "row" }}>
                        <View style={{ paddingHorizontal: 20, paddingTop: 60 }}>
                          <View>
                            <Text style={[styles.runningform, { width: 110 }]}>
                              Shorten your stride
                            </Text>
                          </View>
                          <View style={{ paddingTop: 10 }}>
                            <ImageBackground
                              source={require("@/assets/images/learnmore2.png")}
                              style={{
                                width: 70,
                                height: 28,
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <View>
                                <Text style={styles.learnmore}>Learn More</Text>
                              </View>
                            </ImageBackground>
                          </View>
                        </View>
                        <View style={{ paddingTop: 34 }}>
                          <Image
                            source={require("@/assets/images/formpic2.png")}
                            style={{
                              width: 56,
                              height: 136,
                              zIndex: 10,
                              right: 20,
                            }}
                          />
                        </View>
                      </View>
                    </ImageBackground>
                  </View>

                  <View>
                    <ImageBackground
                      source={require("@/assets/images/formcontainer3.png")}
                      style={{ width: 202, height: 207 }}
                    >
                      <View style={{ flexDirection: "row" }}>
                        <View style={{ paddingHorizontal: 20, paddingTop: 52 }}>
                          <View>
                            <Text style={[styles.runningform, { width: 110 }]}>
                              Keep your shoulders straight
                            </Text>
                          </View>
                          <View style={{ paddingTop: 10 }}>
                            <ImageBackground
                              source={require("@/assets/images/learnmore3.png")}
                              style={{
                                width: 70,
                                height: 28,
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <View>
                                <Text style={styles.learnmore}>Learn More</Text>
                              </View>
                            </ImageBackground>
                          </View>
                        </View>
                        <View style={{ paddingTop: 34 }}>
                          <Image
                            source={require("@/assets/images/formpic3.png")}
                            style={{
                              width: 46,
                              height: 136,
                              zIndex: 10,
                              right: 10,
                            }}
                          />
                        </View>
                      </View>
                    </ImageBackground>
                  </View>

                  <View>
                    <ImageBackground
                      source={require("@/assets/images/formcontainer4.png")}
                      style={{ width: 202, height: 207 }}
                    >
                      <View style={{ flexDirection: "row" }}>
                        <View style={{ paddingHorizontal: 20, paddingTop: 60 }}>
                          <View>
                            <Text style={[styles.runningform, { width: 108 }]}>
                              Swing your arms
                            </Text>
                          </View>
                          <View style={{ paddingTop: 10 }}>
                            <ImageBackground
                              source={require("@/assets/images/learnmore4.png")}
                              style={{
                                width: 70,
                                height: 28,
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <View>
                                <Text style={styles.learnmore}>Learn More</Text>
                              </View>
                            </ImageBackground>
                          </View>
                        </View>
                        <View style={{ paddingTop: 34 }}>
                          <Image
                            source={require("@/assets/images/formpic4.png")}
                            style={{
                              width: 42,
                              height: 136,
                              zIndex: 10,
                              right: 6,
                            }}
                          />
                        </View>
                      </View>
                    </ImageBackground>
                  </View>
                </View>
              </ScrollView>
            </View>

            <View style={{ paddingHorizontal: 20, paddingTop: 10 }}>
              <View>
                <Text style={styles.sectiontitle}>Gear Choice</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  columnGap: 16,
                  alignItems: "center",
                  paddingTop: 14,
                }}
              >
                <GearIcon1 />
                <View>
                  <Text style={[styles.geardetails, { width: 212 }]}>
                    Lightweight and waterproof clothing
                  </Text>
                </View>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  columnGap: 16,
                  alignItems: "center",
                  paddingTop: 10,
                }}
              >
                <GearIcon2 />
                <View>
                  <Text style={[styles.geardetails, { width: 250 }]}>
                    Lugs and softer outsole rubber for better grip and stability
                  </Text>
                </View>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  columnGap: 16,
                  alignItems: "center",
                  paddingTop: 10,
                }}
              >
                <GearIcon3 />
                <View>
                  <Text style={[styles.geardetails, { width: 250 }]}>
                    Mosquito repellent due to high number of mosquitoes
                  </Text>
                </View>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  columnGap: 16,
                  alignItems: "center",
                  paddingTop: 10,
                }}
              >
                <GearIcon4 />
                <View>
                  <Text style={[styles.geardetails, { width: 250 }]}>
                    First-aid kit to treat unexpected injuries throughout the
                    run
                  </Text>
                </View>
              </View>
            </View>

            <View style={{ paddingHorizontal: 20, paddingTop: 30 }}>
              <ImageBackground
                source={require("@/assets/images/alternatecontainer.png")}
                style={{ width: 350, height: 305 }}
              >
                <View style={{ paddingHorizontal: 30, paddingVertical: 16 }}>
                  <View>
                    <Text style={styles.sectiontitle}>Alternate Route</Text>
                  </View>
                  <View style={{ paddingTop: 10 }}>
                    <Text style={styles.geardetails}>
                      Similar routes that brings on the same challenge and
                      thrill with safer conditions.
                    </Text>
                  </View>
                  <View style={{ paddingTop: 14 }}>
                    <Image
                      source={require("@/assets/images/alternateroute.png")}
                      style={{ width: 290, height: 185 }}
                    />
                  </View>
                </View>
              </ImageBackground>
            </View>
          </ScrollView>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  locationtitle: {
    fontFamily: "TransformaMixSemiBold",
    fontSize: 22,
    backgroundColor: "transparent",
    color: "white",
  },

  card: {
    justifyContent: "center",
    alignItems: "center",
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

  sectiontitle: {
    fontFamily: "TransformaMixSemiBold",
    fontSize: 20,
    backgroundColor: "transparent",
    color: "white",
  },

  runningform: {
    fontFamily: "TransformaSansSemiBold",
    fontSize: 18,
    backgroundColor: "transparent",
    color: "white",
    width: 98,
  },

  learnmore: {
    fontFamily: "TransformaSansMedium",
    fontSize: 8,
    backgroundColor: "transparent",
    color: "white",
  },

  geardetails: {
    fontFamily: "TransformaSansSemiBold",
    fontSize: 12,
    backgroundColor: "transparent",
    color: "white",
  },
});

export default RouteLibraryScreen;
