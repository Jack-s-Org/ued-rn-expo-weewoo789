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

const HeartRate = () => {
  return (
    <View
      style={{
        paddingHorizontal: 22,
        paddingVertical: 20,
        // justifyContent: "center",
        // alignItems: "center",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          columnGap: 130,
          paddingBottom: 6,
        }}
      >
        <View>
          <Text
            style={{
              fontFamily: "TransformaSansSemiBold",
              fontSize: 20,
              backgroundColor: "transparent",
              color: "white",
            }}
          >
            Heart Rate
          </Text>
        </View>

        <View style={{ alignItems: "flex-end" }}>
          <View>
            <Text
              style={{
                fontFamily: "TransformaSansBold",
                fontSize: 26,
                backgroundColor: "transparent",
                color: "white",
              }}
            >
              110
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontFamily: "TransformaSansBold",
                fontSize: 12,
                backgroundColor: "transparent",
                color: "white",
              }}
            >
              avg bpm
            </Text>
          </View>
        </View>
      </View>
      <Image
        source={require("@/assets/images/heartrategraph.png")}
        style={{
          width: 306,
          height: 76,
          //   justifyContent: "center",
          //   alignSelf: "center",
          //   alignItems: "center",
          // paddingTop: 20,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  calendar: {
    fontFamily: "TransformaSansExtraBold",
    fontSize: 16,
    color: "white",
    backgroundColor: "transparent",
    position: "block",
    padding: 2,
    marginTop: 8,
    justifyContent: "space-around",
    // flexDirection: "column",
    // columnGap: 10,
    // lineHeight: "120%",
    // paddingVertical: 20,
  },

  subheader: {
    fontFamily: "TransformaMixSemiBold",
    fontSize: 20,
    backgroundColor: "transparent",
    color: "white",
    // marginTop: 30,
  },

  containerheader: {
    fontFamily: "TransformaSansSemiBold",
    fontSize: 20,
    backgroundColor: "transparent",
    color: "white",
  },

  containernumbers: {
    fontFamily: "TransformaSansBold",
    fontSize: 26,
    backgroundColor: "transparent",
    color: "white",
  },

  containerunits: {
    fontFamily: "TransformaSansBold",
    fontSize: 12,
    backgroundColor: "transparent",
    color: "white",
  },
});

export default HeartRate;
