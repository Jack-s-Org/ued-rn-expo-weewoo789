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

const GetStartedScreen = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ height: "100%" }}>
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
                <BackIcon></BackIcon>
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

          {/* <ImageBackground
            source={require("@/assets/images/selectioncontainer.png")}
            style={{
              width: 350,
              height: 268,
              alignSelf: "center",
              marginTop: 14,
            }}
          >
            <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
              <View>
                <Text
                  style={{
                    fontFamily: "TransformaMixSemiBold",
                    fontSize: 20,
                    backgroundColor: "transparent",
                    color: "white",
                  }}
                >
                  Where will you run today?
                </Text>
              </View>
            </View> */}

          {/* <View style={{ backgroundColor: "red" }}>
              <CollapsibleContainer></CollapsibleContainer>
            </View> */}

          <View
            style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
          >
            <AccordionList />
          </View>
          {/* </ImageBackground> */}
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
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
