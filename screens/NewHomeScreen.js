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
import CardSwipe from "@/components/CardSwipe";
import AveragePace from "@/components/AveragePaceContainer/AveragePace";
import AveragePaceCarousel from "@/components/AveragePaceContainer/AveragePaceCarousel";
import SwipeableCarouselNormalHorizontal from "@/components/SwipeableCarousel/SwipeableCarouselNormalHorizontal";
import HeartRateCarousel from "@/components/HeartRateContainer/HeartRateCarousel";
import BackIcon from "@/components/BackIcon";
import NextIcon from "@/components/NextIcon";
import ElevationCarousel from "@/components/ElevationContainer/ElevationCarousel";
import CaloriesCarousel from "@/components/CaloriesContainer/CaloriesCarousel";
// import Dots from "@/components/SwipeableCarousel/Dots";
import { StatusBar } from "expo-status-bar";
import ProfileIcon from "@/components/ProfileIcon";

const NewHomeScreen = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ height: "100%" }}>
        <StatusBar hidden={true} />

        {/* <Text>New Home</Text> */}
        <ImageBackground
          source={require("@/assets/images/background.png")}
          resizeMode="cover"
          style={{
            flex: 1,
            // justifyContent: "center",
            height: "100%",
          }}
        >
          <View style={{ justifyContent: "center" }}>
            <ImageBackground
              source={require("@/assets/images/topframe.png")}
              style={{ top: 0, width: 390, height: 248 }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignSelf: "center",
                  alignItems: "center",
                  // marginTop: "-154%",
                  // marginTop: -480,
                  marginBottom: 6,
                  marginTop: 26,
                  // zindex: 1,
                  //   alignContent: "center",
                  justifyContent: "center",
                  //   alignVertical: "center",
                  //   textAlignVertical: "center",
                  // position: "absolute",
                }}
              >
                <Text
                  style={{
                    fontFamily: "TransformaMixSemiBold",
                    fontSize: 36,
                    backgroundColor: "transparent",
                    color: "white",
                    // position: "absolute",
                    // top: 0,
                    // marginBottom: "2.4%",
                  }}
                >
                  Hello, Yi Wen!
                </Text>
                <ProfileIcon
                  style={{
                    justifyContent: "center",
                    alignContent: "center",
                    marginLeft: 48,
                  }}
                ></ProfileIcon>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignSelf: "center",
                  columnGap: 8,
                  // bottom: "-2.8%",
                  marginTop: 30,
                  // marginBottom: 30,
                }}
              >
                <View
                  style={{
                    flexDirection: "column",
                    columnGap: 10,
                    alignItems: "center",
                    justifyContent: "center",
                    // padding: 2,
                    paddingBottom: 12,
                    backgroundColor: "#1E1E1E",
                    borderRadius: 20,
                    width: 54,
                  }}
                >
                  <Text style={styles.calendar}>10</Text>
                  <Text style={styles.calendar}>Mon</Text>
                </View>
                <View
                  style={{
                    flexDirection: "column",
                    columnGap: 10,
                    alignItems: "center",
                    justifyContent: "center",
                    // padding: 2,
                    paddingBottom: 12,
                    backgroundColor: "#1E1E1E",
                    borderRadius: 20,
                    width: 54,
                  }}
                >
                  <Text style={styles.calendar}>11</Text>
                  <Text style={styles.calendar}>Tue</Text>
                </View>
                <View
                  style={{
                    flexDirection: "column",
                    columnGap: 10,
                    alignItems: "center",
                    justifyContent: "center",
                    // padding: 2,
                    paddingBottom: 12,
                    backgroundColor: "#1E1E1E",
                    borderRadius: 20,
                    width: 54,
                  }}
                >
                  <Text style={styles.calendar}>12</Text>
                  <Text style={styles.calendar}>Wed</Text>
                </View>
                <View
                  style={{
                    flexDirection: "column",
                    columnGap: 10,
                    alignItems: "center",
                    justifyContent: "center",
                    // padding: 2,
                    paddingBottom: 12,
                    backgroundColor: "#1E1E1E",
                    borderRadius: 20,
                    width: 54,
                  }}
                >
                  <Text style={styles.calendar}>13</Text>
                  <Text style={styles.calendar}>Thu</Text>
                </View>
                <View
                  style={{
                    flexDirection: "column",
                    columnGap: 10,
                    alignItems: "center",
                    justifyContent: "center",
                    // padding: 2,
                    paddingBottom: 12,
                    backgroundColor: "#1E1E1E",
                    borderRadius: 20,
                    width: 54,
                  }}
                >
                  <Text style={styles.calendar}>14</Text>
                  <Text style={styles.calendar}>Fri</Text>
                </View>
                <View
                  style={{
                    flexDirection: "column",
                    columnGap: 10,
                    alignItems: "center",
                    justifyContent: "center",
                    // padding: 2,
                    paddingBottom: 12,
                    backgroundColor: "#1E1E1E",
                    borderRadius: 20,
                    width: 54,
                  }}
                >
                  <Text style={styles.calendar}>15</Text>
                  <Text style={styles.calendar}>Sat</Text>
                </View>
              </View>
              <Pressable
                style={{
                  width: 106,
                  height: 14,
                  borderRadius: 20,
                  backgroundColor: "#00DFA2",
                  alignSelf: "center",
                  // marginBottom: 50,
                  // top: "6%",
                  marginTop: 30,
                }}
              ></Pressable>
            </ImageBackground>
          </View>

          <ScrollView>
            <View
              style={{
                padding: 20,
                paddingTop: 20,
                paddingBottom: 0,
                flexGrow: 1,
                // backgroundColor: "red",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  columnGap: 186,
                  alignItems: "center",
                }}
              >
                <View style={{ paddingVertical: 14 }}>
                  <Text style={styles.subheader}>Today's Plan</Text>
                </View>
                <NextIcon></NextIcon>
              </View>

              <ScrollView
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                style={{
                  flex: 1,
                  // height: 118,
                  flexDirection: "row",
                  alignSelf: "flex-start",
                  columnGap: 8,
                  // paddingHorizontal: 20,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignSelf: "flex-start",
                    columnGap: 8,
                    // paddingHorizontal: 20,
                    // paddingTop: 300,
                    // width: 380,
                    // height: 118,
                  }}
                >
                  <Image
                    source={require("@/assets/images/warmup.png")}
                    style={{ width: 140, height: 117.27 }}
                  />
                  <Image
                    source={require("@/assets/images/walk.png")}
                    style={{ width: 140, height: 117.27 }}
                  />
                  <Image
                    source={require("@/assets/images/run.png")}
                    style={{ width: 140, height: 117.27 }}
                  />
                  <Image
                    source={require("@/assets/images/rest.png")}
                    style={{ width: 140, height: 117.27 }}
                  />
                </View>
              </ScrollView>
            </View>

            <View
              style={{
                paddingHorizontal: 20,
                paddingTop: 30,
                paddingBottom: 0,
              }}
            >
              <View>
                <Text style={styles.subheader}>Previous Run</Text>
              </View>

              <View style={{ paddingTop: 14 }}>
                <ImageBackground
                  source={require("@/assets/images/avgpacecontainer.png")}
                  style={{ width: 350, height: 180 }}
                >
                  <AveragePaceCarousel />
                </ImageBackground>
              </View>

              <View style={{ paddingTop: 14 }}>
                <ImageBackground
                  source={require("@/assets/images/heartratecontainer.png")}
                  style={{ width: 350, height: 180 }}
                >
                  <HeartRateCarousel />
                </ImageBackground>
              </View>

              <View style={{ paddingTop: 14 }}>
                <ImageBackground
                  source={require("@/assets/images/elevationcontainer.png")}
                  style={{
                    width: 350,
                    height: 180,
                    // justifyContent: "center",
                    // alignItems: "center",
                  }}
                >
                  <ElevationCarousel />
                </ImageBackground>
              </View>

              <View style={{ paddingTop: 14 }}>
                <ImageBackground
                  source={require("@/assets/images/caloriescontainer.png")}
                  style={{
                    width: 350,
                    height: 180,
                    // justifyContent: "center",
                    // alignItems: "center",
                  }}
                >
                  <CaloriesCarousel />
                </ImageBackground>
              </View>
            </View>
          </ScrollView>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  calendar: {
    fontFamily: "TransformaSansExtraBold",
    fontSize: 16,
    color: "white",
    backgroundColor: "transparent",
    position: "block",
    padding: 2,
    marginTop: 8,
    justifyContent: "space-around",
    // flexDirection: "column",
    // columnGap: 10,
    // lineHeight: "120%",
    // paddingVertical: 20,
  },

  subheader: {
    fontFamily: "TransformaMixSemiBold",
    fontSize: 20,
    backgroundColor: "transparent",
    color: "white",
    // marginTop: 30,
  },

  containerheader: {
    fontFamily: "TransformaSansSemiBold",
    fontSize: 20,
    backgroundColor: "transparent",
    color: "white",
  },

  containernumbers: {
    fontFamily: "TransformaSansBold",
    fontSize: 26,
    backgroundColor: "transparent",
    color: "white",
  },

  containerunits: {
    fontFamily: "TransformaSansBold",
    fontSize: 12,
    backgroundColor: "transparent",
    color: "white",
  },
});

export default NewHomeScreen;
