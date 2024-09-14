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

const Elevation2 = () => {
  return (
    <View style={{ paddingHorizontal: 22, paddingVertical: 20 }}>
      <View style={{ flexDirection: "row", columnGap: 26, paddingBottom: 12 }}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View>
            <Text style={styles.bold}>5.8 km</Text>
          </View>
          <View>
            <Text style={styles.medium}>distance</Text>
          </View>
        </View>

        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View>
            <Text style={styles.bold}>46 m</Text>
          </View>
          <View>
            <Text style={styles.medium}>minimum</Text>
          </View>
        </View>

        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View>
            <Text style={styles.bold}>139 m</Text>
          </View>
          <View>
            <Text style={styles.medium}>maximum</Text>
          </View>
        </View>
      </View>
      <Image
        source={require("@/assets/images/elevationgraph2.png")}
        style={{
          width: 292,
          height: 56,
          justifyContent: "center",
          alignItems: "center",
          left: 6,
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

  bold: {
    fontFamily: "TransformaSansBold",
    fontSize: 26,
    backgroundColor: "transparent",
    color: "white",
  },

  medium: {
    fontFamily: "TransformaSansMedium",
    fontSize: 12,
    backgroundColor: "transparent",
    color: "white",
  },
});

export default Elevation2;
