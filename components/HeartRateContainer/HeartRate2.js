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

const HeartRate2 = () => {
  return (
    <View style={{ paddingHorizontal: 22, paddingVertical: 20 }}>
      <View style={{ left: 56 }}>
        <Text style={styles.indication}>Peak (135 bpm)</Text>
      </View>
      <Image
        source={require("@/assets/images/detailedheartrate.png")}
        style={{ width: 312, height: 88 }}
      />

      <View
        style={{
          flexDirection: "row",
          columnGap: 54,
          left: 4,
        }}
      >
        <View
          style={{
            flexDirection: "column",
            // justifyContent: "space-around",
            alignItems: "center",
            // alignContent: "center",
            // left: 0,
          }}
        >
          <View>
            <Text style={styles.number}>0</Text>
          </View>

          <View>
            <Text style={styles.timeunit}>min</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "column",
            // justifyContent: "space-around",
            alignItems: "center",
            // alignContent: "center",
            // left: 0,
          }}
        >
          <View>
            <Text style={styles.number}>10</Text>
          </View>

          <View>
            <Text style={styles.timeunit}>min</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "column",
            // justifyContent: "space-around",
            alignItems: "center",
            // alignContent: "center",
            // left: 0,
          }}
        >
          <View>
            <Text style={styles.number}>20</Text>
          </View>

          <View>
            <Text style={styles.timeunit}>min</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "column",
            // justifyContent: "space-around",
            alignItems: "center",
            // alignContent: "center",
            // left: 0,
          }}
        >
          <View>
            <Text style={styles.number}>30</Text>
          </View>

          <View>
            <Text style={styles.timeunit}>min</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "column",
            // justifyContent: "space-around",
            alignItems: "center",
            // alignContent: "center",
            // left: 0,
          }}
        >
          <View>
            <Text style={styles.number}>40</Text>
          </View>

          <View>
            <Text style={styles.timeunit}>min</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "column",
            // justifyContent: "space-around",
            alignItems: "center",
            // alignContent: "center",
            // left: 0,
            zIndex: 10,
            left: -260,
          }}
        >
          <View>
            <Text style={styles.number}>13</Text>
          </View>

          <View>
            <Text style={styles.timeunit}>min</Text>
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

  indication: {
    fontFamily: "TransformaSansRegular",
    fontSize: 10,
    backgroundColor: "transparent",
    color: "white",
  },

  number: {
    fontFamily: "TransformaSansBold",
    fontSize: 12,
    backgroundColor: "transparent",
    color: "white",
  },

  timeunit: {
    fontFamily: "TransformaSansRegular",
    fontSize: 8,
    backgroundColor: "transparent",
    color: "white",
  },
});

export default HeartRate2;
