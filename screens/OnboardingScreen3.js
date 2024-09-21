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
import OnboardButton3 from "@/components/OnboardButton3";
import { useNavigation } from "@react-navigation/native";
import OnboardBackButton2 from "@/components/OnboardBackButton2";

const OnboardingScreen2 = () => {
  const navigation = useNavigation();
  return (
    // <SafeAreaProvider>
    <View style={{ height: "100%" }}>
      <ImageBackground
        source={require("@/assets/images/onboardingpage3.png")}
        resizeMode="cover"
        style={{
          flex: 1,
          justifyContent: "center",
          height: "100%",
        }}
      >
        <Pressable onPress={() => navigation.navigate("SignIn")}>
          <View style={{ paddingTop: 700, left: 276 }}>
            <OnboardButton3 />
          </View>
        </Pressable>

        <Pressable onPress={() => navigation.navigate("OnboardingScreen2")}>
          <View style={{ marginTop: -228, left: 54 }}>
            <OnboardBackButton2 />
          </View>
        </Pressable>
      </ImageBackground>
    </View>
    // </SafeAreaProvider>
  );
};

export default OnboardingScreen2;
