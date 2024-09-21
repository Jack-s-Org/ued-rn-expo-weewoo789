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
    // <SafeAreaProvider>
    <View style={{ height: "100%" }}>
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
          <View style={{ marginTop: 704, left: 276 }}>
            <OnboardButton1 />
          </View>
        </Pressable>
      </ImageBackground>
    </View>
    // </SafeAreaProvider>
  );
};

export default OnboardingScreen;
