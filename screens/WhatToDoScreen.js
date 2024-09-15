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

const RouteLibraryScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ height: "100%" }}>
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
                <BackIcon onPress={() => navigation.goBack()}></BackIcon>
              </View>

              <View>
                <Text
                  style={{
                    fontFamily: "TransformaMixSemiBold",
                    fontSize: 28,
                    backgroundColor: "transparent",
                    color: "white",
                    textAlign: "center",
                    width: 250,
                  }}
                >
                  What To Do
                </Text>
              </View>

              <View>
                <NextIcon></NextIcon>
              </View>
            </View>
          </ImageBackground>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
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
});

export default RouteLibraryScreen;
