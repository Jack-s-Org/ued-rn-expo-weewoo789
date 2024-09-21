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
import { CollapsibleContainer } from "@/components/CollapsibleContainer";
import Accordion from "@/components/Accordion";
import AccordionList from "@/components/AccordionList";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

const GetStartedScreen = () => {
  const navigation = useNavigation();

  return (
    // <SafeAreaProvider>
    <View style={{ height: "100%" }}>
      <StatusBar hidden={true} />
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
              top: -8,
              // backgroundColor: "red",
              // paddingTop: 0,
            }}
          >
            <View>
              <BackIcon
                onPress={() => {
                  navigation.navigate("Run", {
                    screen: "SelectRun",
                  });
                  // Fallback to navigate if goBack is not possible
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
                  width: 272,
                }}
              >
                Sweet! Let's get you started!
              </Text>
            </View>
          </View>
        </ImageBackground>

        <View
          style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
        >
          <AccordionList />
        </View>
        {/* </ImageBackground> */}
      </ImageBackground>
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
});

export default GetStartedScreen;
