import RootNavigator from "./screens/RootNavigator";
import "./gesture-handler";
import { useFonts } from "expo-font";
import createIconSetFromIcoMoon from "@expo/vector-icons/createIconSetFromIcoMoon";
import { View, Image, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import VideoPlayer from "@/components/VideoPlayer";

const Icon = createIconSetFromIcoMoon(
  require("@/assets/icomoon/selection.json"),
  "IcoMoon",
  "icomoon.ttf"
);

export default function App() {
  const [fontsLoaded] = useFonts({
    IcoMoon: require("@/assets/icomoon/icomoon.ttf"),
    // "Gilroy-regular": require(),
    TransformaMixSemiBold: require("@/assets/fonts/mix/TransformaMix_Trial-SemiBold.otf"),
    TransformaSansMedium: require("@/assets/fonts/sans/TransformaSans_Trial-Medium.otf"),
    TransformaSansRegular: require("@/assets/fonts/sans/TransformaSans_Trial-Regular.otf"),
    TransformaSansSemiBold: require("@/assets/fonts/sans/TransformaSans_Trial-SemiBold.otf"),
    TransformaSansBold: require("@/assets/fonts/sans/TransformaSans_Trial-Bold.otf"),
    TransformaSansExtraBold: require("@/assets/fonts/sans/TransformaSans_Trial-ExtraBold.otf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ height: "100%" }}>
        <RootNavigator />
        {/* <Icon name="tiktok" size={32} />
      <Image source={require("@/assets/tiktok-add.png")} />
      <Text>Hello</Text> */}

        {/* <VideoPlayer></VideoPlayer> */}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
