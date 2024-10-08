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
import OverviewCarousel from "@/components/OverviewCarousel";
import SwipeableCarouselParallaxHorizontal from "@/components/SwipeableCarousel";
import { useNavigation } from "@react-navigation/native";

const GeneralOverviewScreen = () => {
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
              <BackIcon
                onPress={() => {
                  navigation.goBack();
                }}
              ></BackIcon>
            </View>

            <View>
              <Text
                style={{
                  fontFamily: "TransformaMixSemiBold",
                  fontSize: 28,
                  backgroundColor: "transparent",
                  color: "white",
                  textAlign: "center",
                  // width: 255,
                }}
              >
                General Overview
              </Text>
            </View>
          </View>
        </ImageBackground>

        <View style={{ paddingTop: 4 }}>
          <SwipeableCarouselParallaxHorizontal></SwipeableCarouselParallaxHorizontal>
        </View>
      </ImageBackground>
    </View>
    // </SafeAreaProvider>
  );
};

export default GeneralOverviewScreen;
