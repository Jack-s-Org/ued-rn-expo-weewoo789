import {
  StyleSheet,
  Text,
  ImageBackground,
  Image,
  View,
  Dimensions,
  TouchableHighlight,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import VideoPlayer from "@/components/VideoPlayer";

const OnboardingScreen = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ height: "100%" }}>
        <ImageBackground
          source={require("@/assets/images/onboardbg.png")}
          resizeMode="cover"
          style={{
            flex: 1,
            justifyContent: "center",
            height: "100%",
          }}
        >
          <Text style={textStyles.container}>Onboarding Screen</Text>
          {/* <VideoPlayer></VideoPlayer> */}

          <View style={circleStyles.container}>
            <Image
              source={require("@/assets/images/shoebw.png")}
              style={{ height: "56%", backgroundBlendMode: "luminosity" }}
            />
          </View>
          <Image
            source={require("@/assets/images/stroke.gif")}
            style={StyleSheet.absoluteFill}
          />
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     display: "flex",
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     height: "100%",
//   },
// });

const textStyles = StyleSheet.create({
  container: {
    display: "flex",
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // height: "100%",
    color: "white",
    // margin: "auto",
  },
});

const circleStyles = StyleSheet.create({
  container: {
    display: "block",
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: 340,
    height: 340,
    backgroundColor: "#FFC1D8",
    borderRadius: 1000,
    margin: "auto",
  },
});

// const stroke = StyleSheet.create({
//   height: "100%",
//   display: "flex",
//   flex: 1,
//   alignItems: "center",
//   justifyContent: "center",
// });
export default OnboardingScreen;
