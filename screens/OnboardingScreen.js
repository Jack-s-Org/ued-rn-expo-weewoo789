import {
  StyleSheet,
  Text,
  ImageBackground,
  Image,
  View,
  Dimensions,
  TouchableHighlight,
  Pressable,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import VideoPlayer from "@/components/VideoPlayer";
import OnboardButton1 from "@/components/OnboardButton1";
import { useNavigation } from "@react-navigation/native";

const OnboardingScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ height: "100%" }}>
        <ImageBackground
          source={require("@/assets/images/onboardingpage1.png")}
          resizeMode="cover"
          style={{
            flex: 1,
            justifyContent: "center",
            height: "100%",
          }}
        >
          <Pressable onPress={() => navigation.navigate("OnboardingScreen2")}>
            <View style={{ marginTop: 704, left: 278 }}>
              <OnboardButton1 />
            </View>
          </Pressable>
          {/* <Text style={textStyles.container}>Onboarding Screen</Text> */}
          {/* <VideoPlayer></VideoPlayer> */}

          {/* <View style={circleStyles.container}>
            <Image
              source={require("@/assets/images/shoebw.png")}
              style={{
                height: "56%",
                backgroundBlendMode: "luminosity",
                color: "rgba(255, 255, 255, 0.5)",
              }}
            />
          </View>
          <Image
            source={require("@/assets/images/stroke.gif")}
            style={StyleSheet.absoluteFill}
            // resizeMode="stretch"
          /> */}
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default OnboardingScreen;
