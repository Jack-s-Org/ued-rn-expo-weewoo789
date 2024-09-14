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

const Calories2 = () => {
  return (
    <View
      style={{
        paddingHorizontal: 22,
        paddingVertical: 20,
        left: 4,
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
          Goal
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          columnGap: 14,
          alignItems: "center",
          paddingBottom: 10,
        }}
      >
        <Image
          source={require("@/assets/images/goal1.png")}
          style={{ width: 236, height: 25 }}
        />
        <View
          style={{ flexDirection: "column", rowGap: 2, alignItems: "center" }}
        >
          <View>
            <Text style={styles.percentage}>58%</Text>
          </View>

          <View>
            <Text style={styles.units}>kcal</Text>
          </View>
        </View>
      </View>

      <View
        style={{ flexDirection: "row", columnGap: 14, alignItems: "center" }}
      >
        <Image
          source={require("@/assets/images/goal2.png")}
          style={{ width: 236, height: 25 }}
        />
        <View
          style={{ flexDirection: "column", rowGap: 2, alignItems: "center" }}
        >
          <View>
            <Text style={styles.percentage}>70%</Text>
          </View>

          <View>
            <Text style={styles.units}>kcal/km</Text>
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

  percentage: {
    fontFamily: "TransformaSansBold",
    fontSize: 24,
    backgroundColor: "transparent",
    color: "white",
  },

  units: {
    fontFamily: "TransformaSansMedium",
    fontSize: 12,
    backgroundColor: "transparent",
    color: "white",
  },
});

export default Calories2;
