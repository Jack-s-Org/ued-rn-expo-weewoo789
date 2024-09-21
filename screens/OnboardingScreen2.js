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
import OnboardButton2 from "@/components/OnboardButton2";
import { useNavigation } from "@react-navigation/native";
import OnboardBackButton1 from "@/components/OnboardBackButton1";

const OnboardingScreen2 = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ height: "100%" }}>
        <ImageBackground
          source={require("@/assets/images/onboardingpage2.png")}
          resizeMode="cover"
          style={{
            flex: 1,
            justifyContent: "center",
            height: "100%",
          }}
        >
          <Pressable onPress={() => navigation.navigate("OnboardingScreen3")}>
            <View style={{ paddingTop: 710, left: 278 }}>
              <OnboardButton2 />
            </View>
          </Pressable>

          <Pressable onPress={() => navigation.navigate("OnboardingScreen")}>
            <View style={{ marginTop: -228, left: 54 }}>
              <OnboardBackButton1 />
            </View>
          </Pressable>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default OnboardingScreen2;
