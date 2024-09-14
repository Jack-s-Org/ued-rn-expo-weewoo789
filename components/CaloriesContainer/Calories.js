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

const Calories = () => {
  return (
    <View
      style={{
        paddingHorizontal: 22,
        paddingVertical: 20,
        // justifyContent: "center",
        // alignItems: "center",
        // backgroundColor: "red",
      }}
    >
      <View
        style={{
          // flexDirection: "row",
          // columnGap: 108,
          paddingBottom: 2,
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
            Calories Burned
          </Text>
        </View>

        <View style={{ alignItems: "flex-end" }}>
          {/* <View>
            <Text
              style={{
                fontFamily: "TransformaSansBold",
                fontSize: 26,
                backgroundColor: "transparent",
                color: "white",
              }}
            >
              128
            </Text>
          </View> */}
          {/* <View>
            <Text
              style={{
                fontFamily: "TransformaSansBold",
                fontSize: 12,
                backgroundColor: "transparent",
                color: "white",
              }}
            >
              avg m
            </Text>
          </View> */}
          {/* </View> */}
        </View>

        <View
          style={{
            flexDirection: "row",
            columnGap: 20,
            paddingTop: 18,
            // justifyContent: "center",
            // alignItems: "center",
            // paddingHorizontal: 20,
            left: 8,
          }}
        >
          <View>
            <ImageBackground
              source={require("@/assets/images/kcal.png")}
              style={{
                width: 136,
                height: 76,
                // justifyContent: "center",
                // alignSelf: "center",
                // alignItems: "center",
                // paddingTop: 20,
                // left: 6,
                // right: 0,
                // backgroundColor: "red",
              }}
            >
              <View
                style={{ flexDirection: "column", rowGap: 2, paddingTop: 26 }}
              >
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Text
                    style={{
                      fontFamily: "TransformaSansBold",
                      fontSize: 26,
                      backgroundColor: "transparent",
                      color: "white",
                    }}
                  >
                    1375
                  </Text>
                </View>

                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Text
                    style={{
                      fontFamily: "TransformaSansBold",
                      fontSize: 12,
                      backgroundColor: "transparent",
                      color: "white",
                    }}
                  >
                    kcal
                  </Text>
                </View>
              </View>
            </ImageBackground>
          </View>

          <View>
            <ImageBackground
              source={require("@/assets/images/kcalkm.png")}
              style={{
                width: 135,
                height: 76,
                // justifyContent: "center",
                // alignSelf: "center",
                // alignItems: "center",
                // paddingTop: 20,
                // left: 6,
                // right: 0,
                // backgroundColor: "red",
              }}
            >
              <View
                style={{ flexDirection: "column", rowGap: 2, paddingTop: 26 }}
              >
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Text
                    style={{
                      fontFamily: "TransformaSansBold",
                      fontSize: 26,
                      backgroundColor: "transparent",
                      color: "white",
                    }}
                  >
                    64
                  </Text>
                </View>

                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Text
                    style={{
                      fontFamily: "TransformaSansBold",
                      fontSize: 12,
                      backgroundColor: "transparent",
                      color: "white",
                    }}
                  >
                    kcal/km
                  </Text>
                </View>
              </View>
            </ImageBackground>
          </View>
        </View>
      </View>
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

export default Calories;
