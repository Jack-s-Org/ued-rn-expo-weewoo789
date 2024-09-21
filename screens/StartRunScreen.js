import React, { useState } from "react";
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
import GlassesIcon from "@/components/GlassesIcon";
import StartButton from "@/components/StartButton";
import StopButton from "@/components/StopButton";

const StartRunScreen = () => {
  const [showStopButton, setShowStopButton] = useState(false);

  const startButtonClick = () => {
    setShowStopButton(true);
  };

  const stopButtonclick = () => {
    navigation.navigate("Home"); // Navigate to the desired screen
  };

  const navigation = useNavigation();

  return (
    // <SafeAreaProvider>
    <View style={{ height: "100%" }}>
      <ImageBackground
        source={require("@/assets/images/routemap.png")}
        resizeMode="cover"
        style={{
          flex: 1,
          // justifyContent: "center",
          height: "100%",
        }}
      >
        <View style={{ margin: 20, marginTop: 50, position: "absolute" }}>
          <BackIcon onPress={navigation.goBack} />
        </View>
        <View
          style={{
            right: 0,
            margin: 20,
            marginTop: 44,
            position: "absolute",
          }}
        >
          <GlassesIcon />
        </View>
        <View>
          <Image
            source={require("@/assets/images/location.png")}
            style={{
              width: 40,
              height: 40,
              alignSelf: "center",
              marginTop: 340,
              right: 12,
            }}
          />
        </View>

        <View
          style={{
            alignContent: "center",
            alignSelf: "center",
            marginTop: 240,
          }}
        >
          {showStopButton ? (
            <StopButton onPress={stopButtonclick} />
          ) : (
            <StartButton onPress={startButtonClick} />
          )}
        </View>
      </ImageBackground>
    </View>
    // </SafeAreaProvider>
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

export default StartRunScreen;
