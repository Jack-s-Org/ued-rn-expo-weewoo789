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
import TurfRunIcon from "@/components/TurfRunIcon";
import RoadRunIcon from "@/components/RoadRunIcon";
import TreadmillIcon from "@/components/TreadmillIcon";
import TrailRunIcon from "@/components/TrailRunIcon";
import TempoRunIcon from "@/components/TempoRunIcon";
import BeachRunIcon from "@/components/BeachRunIcon";
import { useNavigation } from "@react-navigation/native";

const SelectRunScreen = () => {
  const navigation = useNavigation();
  return (
    // <SafeAreaProvider>
    <View style={{ height: "100%" }}>
      <ImageBackground
        source={require("@/assets/images/background.png")}
        resizeMode="cover"
        style={{
          flex: 1,
          // justifyContent: "center",
          height: "100%",
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
            top: 0,
            // backgroundColor: "red",
            // paddingTop: 0,
          }}
        >
          <View>
            <BackIcon
              onPress={() => {
                navigation.navigate("Home");
              }}
            />
          </View>
          <View>
            <Text
              style={{
                fontFamily: "TransformaMixSemiBold",
                fontSize: 28,
                backgroundColor: "transparent",
                color: "white",
                textAlign: "center",
                width: 272,
              }}
            >
              What run are you feeling today?
            </Text>
          </View>
        </View>

        <View style={{ paddingTop: 30 }}>
          <View style={{ flexDirection: "row", columnGap: 14 }}>
            <View
              style={{
                paddingLeft: 20,
                //   position: "absolute",
                // marginTop: -300,
                flexDirection: "column",
                rowGap: 24,
                left: 0,
                justifyContent: "flex-start",
              }}
            >
              <ImageBackground
                source={require("@/assets/images/turfrun.png")}
                style={{ width: 168, height: 247, justifyContent: "center" }}
              >
                <View style={styles.card}>
                  <TurfRunIcon></TurfRunIcon>
                  <View>
                    <Text style={styles.text}>Turf Run</Text>
                  </View>
                </View>
              </ImageBackground>

              <ImageBackground
                source={require("@/assets/images/roadrun.png")}
                style={{ width: 168, height: 140, justifyContent: "center" }}
              >
                <View style={styles.card}>
                  <RoadRunIcon></RoadRunIcon>
                  <View>
                    <Text style={styles.text}>Road Run</Text>
                  </View>
                </View>
              </ImageBackground>
            </View>
            <View
              style={{
                paddingRight: 20,
                flexDirection: "column",
                rowGap: 24,
                right: 0,
                justifyContent: "flex-end",
              }}
            >
              <ImageBackground
                source={require("@/assets/images/treadmill.png")}
                style={{ width: 168, height: 140, justifyContent: "center" }}
              >
                <View style={styles.card}>
                  <TreadmillIcon></TreadmillIcon>
                  <View>
                    <Text style={styles.text}>Treadmill</Text>
                  </View>
                </View>
              </ImageBackground>

              <Pressable
                onPress={() => {
                  navigation.navigate("GetStarted");
                  // Fallback to navigate if goBack is not possible
                }}
              >
                <ImageBackground
                  source={require("@/assets/images/trailrun.png")}
                  style={{
                    width: 168,
                    height: 247,
                    justifyContent: "center",
                  }}
                >
                  <View style={styles.card}>
                    <TrailRunIcon></TrailRunIcon>
                    <View>
                      <Text style={styles.text}>Trail Run</Text>
                    </View>
                  </View>
                </ImageBackground>
              </Pressable>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              paddingTop: 24,
              columnGap: 14,
              paddingLeft: 20,
            }}
          >
            <ImageBackground
              source={require("@/assets/images/temporun.png")}
              style={{ width: 222, height: 145, justifyContent: "center" }}
            >
              <View style={styles.card}>
                <TempoRunIcon></TempoRunIcon>
                <View>
                  <Text style={styles.text}>Tempo Run</Text>
                </View>
              </View>
            </ImageBackground>

            <ImageBackground
              source={require("@/assets/images/beachrun.png")}
              style={{ width: 114, height: 145, justifyContent: "center" }}
            >
              <View style={styles.card}>
                <BeachRunIcon></BeachRunIcon>
                <View>
                  <Text style={[styles.text, styles.beach]}>Beach Run</Text>
                </View>
              </View>
            </ImageBackground>
          </View>
        </View>
      </ImageBackground>
      {/* </ImageBackground> */}
    </View>
    // </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "TransformaMixSemiBold",
    fontSize: 20,
    backgroundColor: "transparent",
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },

  beach: {
    // paddingHorizontal: -20,
    width: 112,
    // justifyContent: "center",
    // alignItems: "center",
    // textAlign: "center",
    // left: "50%",
  },

  card: {
    flexDirection: "column",
    rowGap: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SelectRunScreen;
